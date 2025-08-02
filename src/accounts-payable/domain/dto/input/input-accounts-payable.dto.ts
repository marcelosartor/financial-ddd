import { InputAccountsPayableInstallmentDto } from "./input-accounts-payable-installment.dto";

export class InputAccountsPayableDto {
    supplierId: number;
    installments: InputAccountsPayableInstallmentDto[];
}
