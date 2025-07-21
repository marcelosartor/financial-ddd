import { State } from "./state.vo";
import { ZipCode } from "./zip-code.vo";

export class Address {
    constructor(
      public readonly address: string,
      public readonly number: string,
      public readonly city: string,
      public readonly neighborhood: string,
      public readonly zipCode: ZipCode,
      public readonly state: State,
    ) {
        this.validate()
    }
  
    private validate(): void {
        if (!this.address?.trim()) throw new Error('Endereço é obrigatório');
        if (!this.number?.trim()) throw new Error('Número é obrigatório');
        if (!this.city?.trim()) throw new Error('Cidade é obrigatória');
        if (!this.neighborhood?.trim()) throw new Error('Bairro é obrigatório');
      }

  
 }
