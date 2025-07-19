import { Module } from '@nestjs/common';
import { PostCreateSupplierController } from './application/controllers/post-create-supplier.controller';
import { CreateSupplierService } from './domain/services/create-supplier.service';


@Module({
  controllers: [PostCreateSupplierController],
  providers: [CreateSupplierService]
})
export class BaseModule {}
