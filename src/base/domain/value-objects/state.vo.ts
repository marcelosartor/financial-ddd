export class State {
    private readonly value: string;
  
    constructor(value: string) {
      if (!value?.match(/^[A-Z]{2}$/)) {
        throw new Error('Estado deve conter 2 letras maiúsculas');
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
