export class ZipCode {
    private readonly value: string;
  
    constructor(value: string) {
      if (!value?.match(/^\d{5}-?\d{3}$/)) {
        throw new Error('CEP inválido');
      }
      this.value = value;
    }
  
    getValue(): string {
      return this.value;
    }
  
    toString(): string {
      return this.value;
    }
  }
