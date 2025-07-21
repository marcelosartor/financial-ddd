import { Module } from '@nestjs/common';
import { PostCreateSupplierController } from './application/controllers/post-create-supplier.controller';
import { CreateSupplierService } from './domain/services/create-supplier.service';
import { SupplierMapper } from './application/mappers/supplier.mapper';


@Module({
  controllers: [PostCreateSupplierController],
  providers: [CreateSupplierService, SupplierMapper]
})
export class BaseModule {}
