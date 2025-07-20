import { Injectable } from '@nestjs/common';
import { InputSupplierDto } from 'src/base/application/dto/input/input-supplier.dto';
import { Supplier } from '../entities/supplier.entity';

@Injectable()
export class CreateSupplierService {

    async create(supplier: Supplier): Promise<Supplier> {
        console.log(supplier)
        const newSupplier = await this.createSupplier(supplier)
        this.sendMessageThatCreatedANewSupplier(newSupplier)
        return newSupplier
    }

    async createSupplier(supplier: Supplier){
        console.log('criando fornecedor...')
        console.log('...fornecedor criado')
        return supplier
    }

    async sendMessageThatCreatedANewSupplier(supplier: Supplier){
        console.log('enviando email')
        return supplier
    }
}
