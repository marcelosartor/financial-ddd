import { Module } from '@nestjs/common';
import { BaseModule } from './base/base.module';
import { AccountsPayableModule } from './accounts-payable/accounts-payable.module';
import { AccountsReceivableModule } from './accounts-receivable/accounts-receivable.module';
import { BankingMovementModule } from './banking-movement/banking-movement.module';

@Module({
  imports: [BaseModule, AccountsPayableModule, AccountsReceivableModule, BankingMovementModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
