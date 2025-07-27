import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "../value-objects/address.vo";

@Entity()
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  corporateName: string;

  @Column()
  tradeName: string;

  @Column()
  nationalLegalEntityCode: string;

  @Column(type => Address,{prefix:false})
  address: Address;
}