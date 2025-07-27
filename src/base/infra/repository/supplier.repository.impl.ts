import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Supplier } from 'src/base/domain/entities/supplier.entity';
import { SupplierRepository } from 'src/base/domain/repository/supplier.repository.interface';
import { Repository } from 'typeorm';

@Injectable()
export class SupplierRepositoryImpl implements SupplierRepository {
  constructor(
    @InjectRepository(Supplier)
    private readonly ormRepository: Repository<Supplier>,
  ) {}

  async findAll(): Promise<Supplier[]> {
    console.log('entrou na impl')
    return this.ormRepository.find();
  }

  async findById(id: number): Promise<Supplier | null> {
    return this.ormRepository.findOneBy({ id });
  }

  async save(supplier: Supplier): Promise<Supplier> {
    console.log('aqui')
    return this.ormRepository.save(supplier);
  }

  async update(supplier: Supplier): Promise<Supplier> {
    return this.ormRepository.save(supplier);
  }

  async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
