import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { InputAccountsPayableDto } from 'src/accounts-payable/domain/dto/input/input-accounts-payable.dto';
import { OutputAccountsPayableDto } from 'src/accounts-payable/domain/dto/output/output-accounts-payable.dto';
import { AccountsPayableMapper } from '../mappers/accounts-payable.mapper';
import { CreateAccountsPayableService } from 'src/accounts-payable/domain/services/create-accounts-payable.service';

@Controller('accounts-payable')
export class PostAccountsPayableController {
  constructor(
    private readonly accountsPayableMapper: AccountsPayableMapper,
    private readonly createAccountsPayableService: CreateAccountsPayableService
  ){}
  
  @Post()
  async createSupplier(@Body() accountsPayableDto: InputAccountsPayableDto): Promise<OutputAccountsPayableDto> {
    try{
      return this.accountsPayableMapper.toDto(
        await this.createAccountsPayableService.create(
          this.accountsPayableMapper.toEntity(accountsPayableDto)
        )
      )
     
    } catch(error){
      throw new BadRequestException(error.message || 'Erro ao criar titulo a pagar');
    }
  }
}
