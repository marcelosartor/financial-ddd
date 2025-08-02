import { Injectable } from "@nestjs/common";
import { InputAccountsPayableInstallmentDto } from "src/accounts-payable/domain/dto/input/input-accounts-payable-installment.dto";
import { OutputAccountsPayableInstallmentDto } from "src/accounts-payable/domain/dto/output/output-accounts-payable-installment.dto";
import { AccountsPayableInstallment } from "src/accounts-payable/domain/entities/accounts-payable-installment.entity";

@Injectable()
export class AccountsPayableInstallmentMapper {
    
    toEntity(accountsPayableInstallmentDto: InputAccountsPayableInstallmentDto): AccountsPayableInstallment {
        const accountsPayableInstallment = new AccountsPayableInstallment();
        accountsPayableInstallment.installment = accountsPayableInstallmentDto.installment
        accountsPayableInstallment.amount = accountsPayableInstallmentDto.amount
        accountsPayableInstallment.issueDate = accountsPayableInstallmentDto.issueDate
        accountsPayableInstallment.paymentDate = accountsPayableInstallmentDto.paymentDate
            
        return accountsPayableInstallment;
    }
    
    toDto(accountsPayableInstallment: AccountsPayableInstallment): OutputAccountsPayableInstallmentDto {
    
        const outputAccountsPayableInstallmentDto = new OutputAccountsPayableInstallmentDto();
        outputAccountsPayableInstallmentDto.id = accountsPayableInstallment.id
        outputAccountsPayableInstallmentDto.installment = accountsPayableInstallment.installment
        outputAccountsPayableInstallmentDto.amount = accountsPayableInstallment.amount
        outputAccountsPayableInstallmentDto.issueDate = accountsPayableInstallment.issueDate
        outputAccountsPayableInstallmentDto.paymentDate = accountsPayableInstallment.paymentDate
        outputAccountsPayableInstallmentDto.createdAt = accountsPayableInstallment.createdAt
        
        return outputAccountsPayableInstallmentDto;
    
    }
    
}
