import { Injectable } from '@nestjs/common';
import { InputSupplierDto } from 'src/base/application/dto/input/input-supplier.dto';

@Injectable()
export class CreateSupplierService {

    async create(supplierDto: InputSupplierDto): Promise<InputSupplierDto> {
        console.log(supplierDto)
        const supplier = await this.createSupplier(supplierDto)
        this.sendMessageThatCreatedANewSupplier(supplier)
        return supplier
    }

    async createSupplier(supplierDto: InputSupplierDto){
        console.log('criando fornecedor...')
        console.log('...fornecedor criado')
        return supplierDto
    }

    async sendMessageThatCreatedANewSupplier(supplierDto: InputSupplierDto){
        console.log('enviando email')
        return supplierDto
    }
}
