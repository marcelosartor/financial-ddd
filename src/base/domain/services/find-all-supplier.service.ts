import { Inject, Injectable } from "@nestjs/common"
import { SUPPLIER_REPOSITORY, SupplierRepository } from "../repository/supplier.repository.interface"
import { Supplier } from "../entities/supplier.entity"

@Injectable()
export class FindAllSupplierService {
    constructor(
        @Inject(SUPPLIER_REPOSITORY)
        private readonly supplierRepository: SupplierRepository,
      ) {}
    
    
    async findAll(): Promise<Supplier[]> {
        console.log('list all supplier')
        const suppliers =  await this.supplierRepository.findAll()
        return suppliers
    }
        
}
