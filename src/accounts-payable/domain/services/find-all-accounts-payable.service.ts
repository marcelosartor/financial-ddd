import { Injectable } from '@nestjs/common';
import { AccountsPayableRepositoryImpl } from 'src/accounts-payable/infra/repository/accounts-payable.repository.impl';

@Injectable()
export class FindAllAccountsPayableService {

    constructor(private readonly accountsPayableRepository: AccountsPayableRepositoryImpl){}

    async findAll(): Promise<any[]> {
        console.log('list all accountsPayable')
        return this.accountsPayableRepository.findAll()
    }
    
}
