import { BadRequestException, Controller, Get } from '@nestjs/common';
import { FindAllAccountsPayableService } from 'src/accounts-payable/domain/services/find-all-accounts-payable.service';
import { AccountsPayableMapper } from '../mappers/accounts-payable.mapper';

@Controller('accounts-payable')
export class GetAllAccountsPayableController {
    constructor(
        private readonly findAllAccountsPayableSevice:FindAllAccountsPayableService,
        private readonly accountsPayableMapper: AccountsPayableMapper

    ){}
    
    @Get()
    async findAllSupplier(): Promise<any[]> {

        try{
            const accountsPayable = await this.findAllAccountsPayableSevice.findAll()
            //return suppliers.map(supplier=>this.mapper.toDto(supplier))
            return accountsPayable
        } catch(error){
            console.log(error)  
            throw new BadRequestException(error.message || 'Erro ao listar todos as contas a pagar');
        }
    }  
    
}
