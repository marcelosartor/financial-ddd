import { Module } from '@nestjs/common';
import { BaseModule } from './base/base.module';
import { ContasAPagarModule } from './contas-a-pagar/contas-a-pagar.module';
import { ContasAReceberModule } from './contas-a-receber/contas-a-receber.module';
import { MovimentoBancarioModule } from './movimento-bancario/movimento-bancario.module';

@Module({
  imports: [BaseModule, ContasAPagarModule, ContasAReceberModule, MovimentoBancarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
