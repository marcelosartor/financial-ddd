import { Module } from '@nestjs/common';
import { GetAllAccountsPayableController } from './application/controllers/get-all-accounts-payable.controller';
import { FindAllAccountsPayableService } from './domain/services/find-all-accounts-payable.service';
import { BaseModule } from 'src/base/base.module';
import { AccountsPayableRepositoryImpl } from './infra/repository/accounts-payable.repository.impl';
import { DatabaseModule } from 'src/core/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsPayable } from './domain/entities/accounts-payable.entity';
import { AccountsPayableInstallment } from './domain/entities/accounts-payable-installment.entity';
import { PostAccountsPayableController } from './application/controllers/post-accounts-payable.controller';
import { CreateAccountsPayableService } from './domain/services/create-accounts-payable.service';
import { AccountsPayableInstallmentMapper } from './application/mappers/accounts-payable-installment.mapper';
import { AccountsPayableMapper } from './application/mappers/accounts-payable.mapper';

@Module({
  imports:[BaseModule,
    DatabaseModule,
    TypeOrmModule.forFeature([AccountsPayable,AccountsPayableInstallment])
  ],
  controllers: [GetAllAccountsPayableController, PostAccountsPayableController],
  providers: [
    FindAllAccountsPayableService,
    AccountsPayableRepositoryImpl, 
    CreateAccountsPayableService,
    AccountsPayableMapper,
    AccountsPayableInstallmentMapper]
})
export class AccountsPayableModule {}
