import { Injectable } from "@nestjs/common";
import { InputAccountsPayableDto } from "src/accounts-payable/domain/dto/input/input-accounts-payable.dto";
import { AccountsPayableInstallment } from "src/accounts-payable/domain/entities/accounts-payable-installment.entity";
import { AccountsPayable } from "src/accounts-payable/domain/entities/accounts-payable.entity";
import { Supplier } from "src/base/domain/entities/supplier.entity";
import { AccountsPayableInstallmentMapper } from "./accounts-payable-installment.mapper";
import { OutputAccountsPayableDto } from "src/accounts-payable/domain/dto/output/output-accounts-payable.dto";
import { SupplierMapper } from "src/base/application/mappers/supplier.mapper";

@Injectable()
export class AccountsPayableMapper {
    constructor(
      private readonly accountsPayableInstallmentMapper: AccountsPayableInstallmentMapper,
      private readonly supplierMapper: SupplierMapper){}

    toEntity(accountsPayableDto: InputAccountsPayableDto): AccountsPayable {
    const supplier = new Supplier();
    supplier.id = accountsPayableDto.supplierId
    
    const accountsPayableInstallments:AccountsPayableInstallment[] = accountsPayableDto.installments.map(item=>{
        return this.accountsPayableInstallmentMapper.toEntity(item)
    })

    const entity = new AccountsPayable();
    entity.supplier = supplier
    entity.installments = accountsPayableInstallments

    return entity;
  }

  toDto(accountsPayable: AccountsPayable): OutputAccountsPayableDto {

    const accountsPayableDto = new OutputAccountsPayableDto();
    accountsPayableDto.id = accountsPayable.id
    accountsPayableDto.supplier = this.supplierMapper.toDto(accountsPayable.supplier)
    accountsPayableDto.installments = accountsPayable.installments.map(item=>{
      return this.accountsPayableInstallmentMapper.toDto(item)
    })

    return accountsPayableDto;

  }

}