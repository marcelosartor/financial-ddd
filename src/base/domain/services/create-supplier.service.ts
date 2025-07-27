import { Inject, Injectable } from '@nestjs/common';
import { Supplier } from '../entities/supplier.entity';
import { SUPPLIER_REPOSITORY, SupplierRepository } from '../repository/supplier.repository.interface';


@Injectable()
export class CreateSupplierService {
    constructor(
        @Inject(SUPPLIER_REPOSITORY)
        private readonly supplierRepository: SupplierRepository,
      ) {}

    async create(supplier: Supplier): Promise<Supplier> {
        const newSupplier = await this.createSupplier(supplier)
        this.sendMessageThatCreatedANewSupplier(newSupplier)
        return newSupplier
    }

    async createSupplier(supplier: Supplier){
        console.log('criando fornecedor...',supplier)
        return await this.supplierRepository.save(supplier)
    }

    async sendMessageThatCreatedANewSupplier(supplier: Supplier){
        console.log('enviando email')
        return supplier
    }
}
