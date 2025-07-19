import { Body, Controller, Post } from '@nestjs/common';
import { InputSupplierDto } from '../dto/input/input-supplier.dto';
import { CreateSupplierService } from 'src/base/domain/services/create-supplier.service';

@Controller('supplier')
export class PostCreateSupplierController {
 
  @Post()
  async createSupplier(@Body() supplierDto: InputSupplierDto): Promise<InputSupplierDto> {
    const service = new CreateSupplierService()
    const supplier = service.create(supplierDto)
    return supplier
  }
}
