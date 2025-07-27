import { Supplier } from '../entities/supplier.entity';

export const SUPPLIER_REPOSITORY = 'supplier_repository';


export interface SupplierRepository {
  findById(id: number): Promise<Supplier | null>;
  save(supplier: Supplier): Promise<Supplier>;
  update(supplier: Supplier): Promise<Supplier>;
  delete(id: number): Promise<void>;
  findAll(): Promise<Supplier[]>;
}