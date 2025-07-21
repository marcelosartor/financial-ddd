export class Address {
    constructor(
      public readonly address: string,
      public readonly number: string,
      public readonly city: string,
      public readonly neighborhood: string,
      public readonly zipCode: string,
      public readonly state: string,
    ) {
        this.validate()
    }
  
    private validate(): void {
        if (!this.address?.trim()) throw new Error('Endereço é obrigatório');
        if (!this.number?.trim()) throw new Error('Número é obrigatório');
        if (!this.city?.trim()) throw new Error('Cidade é obrigatória');
        if (!this.neighborhood?.trim()) throw new Error('Bairro é obrigatório');
        if (!this.zipCode?.match(/^\d{5}-?\d{3}$/)) throw new Error('CEP inválido');
        if (!this.state?.match(/^[A-Z]{2}$/)) throw new Error('Estado deve ser a sigla com 2 letras');
      }

  
 }
