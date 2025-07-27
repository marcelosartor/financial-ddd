import { Supplier } from "src/base/domain/entities/supplier.entity"
import { InputSupplierDto } from "../dto/input/input-supplier.dto"
import { plainToClass } from "class-transformer"
import { OutputSupplierDto } from "../dto/output/output-supplier.dto"
import { Injectable } from "@nestjs/common"
import { Address } from "src/base/domain/value-objects/address.vo"
import { ZipCode } from "src/base/domain/value-objects/zip-code.vo"
import { State } from "src/base/domain/value-objects/state.vo"

@Injectable()
export class SupplierMapper {
  // Recebe um DTO e devolve uma entidade de dominio
  //disassembler(supplierDto: InputSupplierDto): Supplier {
    toEntity(supplierDto: InputSupplierDto): Supplier {
    const entity = new Supplier();

    entity.corporateName = supplierDto.corporateName;
    entity.tradeName = supplierDto.tradeName;
    entity.nationalLegalEntityCode = supplierDto.nationalLegalEntityCode;
    entity.address = Address.build(
      supplierDto.address,
      supplierDto.number,
      supplierDto.city,
      supplierDto.neighborhood,
      new ZipCode(supplierDto.zipCode),
      new State(supplierDto.state),
    );

    return entity;
  }

  // Recebe uma entidade e devolve um outputDto
  //assembler(supplier: Supplier): OutputSupplierDto {
    toDto(supplier: Supplier): OutputSupplierDto {

    const supplierDto = new OutputSupplierDto();
    supplierDto.id = supplier.id    
    supplierDto.corporateName = supplier.corporateName
    supplierDto.tradeName = supplier.tradeName
    supplierDto.nationalLegalEntityCode = supplier.nationalLegalEntityCode
    supplierDto.address = supplier.address.address
    supplierDto.number = supplier.address.number
    supplierDto.city = supplier.address.city
    supplierDto.neighborhood = supplier.address.neighborhood
    supplierDto.zipCode = supplier.address.zipCode.getValue()
    supplierDto.state = supplier.address.state.getValue()
    
    return supplierDto;

  }

}