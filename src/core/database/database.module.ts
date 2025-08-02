import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsPayableInstallment } from 'src/accounts-payable/domain/entities/accounts-payable-installment.entity';
import { AccountsPayable } from 'src/accounts-payable/domain/entities/accounts-payable.entity';
import { Supplier } from 'src/base/domain/entities/supplier.entity';


@Module({
    imports: [
        TypeOrmModule.forRootAsync({
          useFactory: async () => ({
          type: 'better-sqlite3',
          database: './database.sqlite',
          dropSchema: false,
          entities: [Supplier,AccountsPayable,AccountsPayableInstallment],
          synchronize: true,
          logging: true,
        }),
      })
    ],
    exports: [TypeOrmModule]

})
export class DatabaseModule {}

