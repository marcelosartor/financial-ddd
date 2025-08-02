import { Module } from '@nestjs/common';
import { PostCreateSupplierController } from './application/controllers/post-create-supplier.controller';
import { CreateSupplierService } from './domain/services/create-supplier.service';
import { SupplierMapper } from './application/mappers/supplier.mapper';
import { SupplierRepositoryImpl } from './infra/repository/supplier.repository.impl';
import { SUPPLIER_REPOSITORY } from './domain/repository/supplier.repository.interface'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supplier } from './domain/entities/supplier.entity';
import { DatabaseModule } from 'src/core/database/database.module';
import { GetAllSupplierController } from './application/controllers/get-all-supplier.controller';
import { FindAllSupplierService } from './domain/services/find-all-supplier.service';
import { SupplierCreatedListener } from './infra/listener/supplier-created.listener';
import { MessagesModule } from 'src/core/messages/messages.module';


@Module({
  
  imports:[
    DatabaseModule,
    MessagesModule,
    TypeOrmModule.forFeature([Supplier])
  ],
  controllers: [PostCreateSupplierController, GetAllSupplierController],
  providers: [
    CreateSupplierService, 
    SupplierMapper,
    FindAllSupplierService,
    SupplierCreatedListener,
    { provide: SUPPLIER_REPOSITORY, useClass: SupplierRepositoryImpl}
    
  ],
  exports:[SupplierMapper]
  
})
export class BaseModule {}
