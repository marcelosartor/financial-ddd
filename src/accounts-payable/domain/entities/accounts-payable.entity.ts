import { Supplier } from "src/base/domain/entities/supplier.entity";
import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { DateTime} from 'luxon'
import { AccountsPayableInstallment } from "./accounts-payable-installment.entity";

@Entity({name:'accounts_payable'})
export class AccountsPayable {
    @PrimaryGeneratedColumn()
    id: number
   
    @ManyToOne(() => Supplier, { eager: true }) 
    @JoinColumn({ name: 'supplier_id' })
    supplier: Supplier;

    
    @Column({ name: 'created_at', type: 'datetime' })
    createdAt: Date

    @OneToMany(() => AccountsPayableInstallment, installment => installment.accountsPayable, {
        cascade: true, 
        eager: true,   
    })
    installments: AccountsPayableInstallment[];

    @BeforeInsert()
    beforeInsert() {
        const _date = DateTime.now().toUTC().toJSDate()
        this.createdAt = _date
    }
    
}
