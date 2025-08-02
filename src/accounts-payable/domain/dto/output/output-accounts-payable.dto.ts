import { OutputSupplierDto } from "src/base/application/dto/output/output-supplier.dto";
import { OutputAccountsPayableInstallmentDto } from "./output-accounts-payable-installment.dto";

export class OutputAccountsPayableDto {
    id: number
    supplier: OutputSupplierDto;
    createdAt: Date
    installments: OutputAccountsPayableInstallmentDto[];
}
