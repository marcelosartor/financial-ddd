import { BadRequestException, Controller, Get } from '@nestjs/common';
import { FindAllSupplierService } from 'src/base/domain/services/find-all-supplier.service';
import { SupplierMapper } from '../mappers/supplier.mapper';
import { OutputSupplierDto } from '../dto/output/output-supplier.dto';

@Controller('supplier')
export class GetAllSupplierController {
    constructor(
        private readonly findAllSupplierService:FindAllSupplierService,
        private readonly mapper: SupplierMapper
      ) {}

    @Get()
    async findAllSupplier(): Promise<OutputSupplierDto[]> {
        try{
            const suppliers = await this.findAllSupplierService.findAll()
        return suppliers.map(supplier=>this.mapper.toDto(supplier))
        } catch(error){
          console.log(error)  
          throw new BadRequestException(error.message || 'Erro ao listar todos os fornecedores');
        }
    }  
   
}
