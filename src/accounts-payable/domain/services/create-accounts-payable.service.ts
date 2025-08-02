import { Injectable } from '@nestjs/common';
import { AccountsPayableRepositoryImpl } from 'src/accounts-payable/infra/repository/accounts-payable.repository.impl';
import { AccountsPayable } from '../entities/accounts-payable.entity';

@Injectable()
export class CreateAccountsPayableService {
    constructor(private readonly accountsPayableRepository: AccountsPayableRepositoryImpl){}
    
    async create(accountsPayable: AccountsPayable): Promise<AccountsPayable> {
        accountsPayable.installments.map(item=>item.accountsPayable = accountsPayable )
        const newAccountsPayable = await this.accountsPayableRepository.save(accountsPayable)
        return await this.accountsPayableRepository.findById(newAccountsPayable.id)
    }
    
}
