import { Body, Controller, Post } from '@nestjs/common';
import { InputSupplierDto } from '../dto/input/input-supplier.dto';
import { CreateSupplierService } from 'src/base/domain/services/create-supplier.service';
import { OutputSupplierDto } from '../dto/output/output-supplier.dto';
import { SupplierMapper } from '../mappers/supplier.mapper';

@Controller('supplier')
export class PostCreateSupplierController {
  constructor(
    private readonly createSupplierService: CreateSupplierService,
    private readonly mapper: SupplierMapper
  ) {}

 
  @Post()
  async createSupplier(@Body() supplierDto: InputSupplierDto): Promise<OutputSupplierDto> {
    const supplier = await this.createSupplierService.create(
      this.mapper.toEntity(supplierDto)
    )
    return this.mapper.toDto(supplier)
  }
}
