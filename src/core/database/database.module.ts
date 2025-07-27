import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supplier } from 'src/base/domain/entities/supplier.entity';


@Module({
    imports: [
        TypeOrmModule.forRootAsync({
          useFactory: async () => ({
          type: 'better-sqlite3',
          database: './database.sqlite',
          dropSchema: false,
          entities: [Supplier],
          synchronize: true,
          logging: true,
        }),
      })
    ],
    exports: [TypeOrmModule]

})
export class DatabaseModule {}

