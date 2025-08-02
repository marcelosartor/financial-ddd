import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AccountsPayable } from "src/accounts-payable/domain/entities/accounts-payable.entity";
import { Repository } from "typeorm";

@Injectable()
export class AccountsPayableRepositoryImpl {
  constructor(
    @InjectRepository(AccountsPayable)
    private readonly ormRepository: Repository<AccountsPayable>,
  ) {}

  async findAll(): Promise<AccountsPayable[]> {
    return this.ormRepository.find();
  }

  async save(accountsPayable: AccountsPayable): Promise<AccountsPayable> {
    return this.ormRepository.save(accountsPayable);
  }
  
  async findById(id: number): Promise<AccountsPayable> {
    return this.ormRepository.findOneByOrFail({ id });
  }

  async update(accountsPayable: AccountsPayable): Promise<AccountsPayable> {
    return this.ormRepository.save(accountsPayable);
  }

  async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }

}
