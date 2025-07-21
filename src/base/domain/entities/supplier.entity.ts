import { Address } from "../models/address.vo"

export class Supplier{
    id: number=-1

    corporateName:string
    tradeName:string
    nationalLegalEntityCode:string
   
    address: Address
}
