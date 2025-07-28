import { Inject, Injectable } from '@nestjs/common';
import { Supplier } from '../entities/supplier.entity';
import { SUPPLIER_REPOSITORY, SupplierRepository } from '../repository/supplier.repository.interface';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { SupplierCreatedEvent } from '../event/supplier-created.event';


@Injectable()
export class CreateSupplierService {
    constructor(
        @Inject(SUPPLIER_REPOSITORY)
        private readonly supplierRepository: SupplierRepository,
        private eventEmitter: EventEmitter2,
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
        const event = new SupplierCreatedEvent(
            supplier.id,
            supplier.corporateName,
            new Date()
        )
        this.eventEmitter.emit('event.supplier-created',event)
    }
}
