import { Supplier } from "src/base/domain/entities/supplier.entity";
import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { DateTime } from "luxon"
import { AccountsPayable } from "./accounts-payable.entity";

@Entity({name:'accounts_payable_installment'})
export class AccountsPayableInstallment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    installment: number

    @Column('decimal', { name: 'amount', precision: 15, scale: 2 })
    amount: number;

    @Column({ name: 'issue_date', type: 'datetime' })
    issueDate: Date;

    @Column({ name: 'payment_date', type: 'datetime', nullable: true })
    paymentDate: Date;

    @ManyToOne(() => AccountsPayable, payable => payable.installments)
    @JoinColumn({ name: 'accounts_payable_id' })
    accountsPayable: AccountsPayable;

    @Column({ name: 'created_at', type: 'datetime' })
    createdAt: Date
        
    @BeforeInsert()
    beforeInsert() {
        const _date = DateTime.now().toUTC().toJSDate()
        this.createdAt = _date
    }
    
}
