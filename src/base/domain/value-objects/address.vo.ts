import { Column } from 'typeorm';
import { ZipCode } from './zip-code.vo';
import { State } from './state.vo';
import { ZipCodeTransformer } from './zip-code.transformer';
import { StateTransformer } from './state.transformer';

export class Address {
  @Column()
  address: string;

  @Column()
  number: string;

  @Column()
  city: string;

  @Column()
  neighborhood: string;

  @Column({ 
    name: 'zip-code',
    type: 'text',
    transformer: ZipCodeTransformer 
  })
  zipCode: ZipCode;

  @Column({ 
    type: 'text',
    transformer: StateTransformer 
  })
  state: State;

  private validate(): void {
    if (!this.address?.trim()) throw new Error('Endereço é obrigatório');
    if (!this.number?.trim()) throw new Error('Número é obrigatório');
    if (!this.city?.trim()) throw new Error('Cidade é obrigatória');
    if (!this.neighborhood?.trim()) throw new Error('Bairro é obrigatório');
  }

  static build(
    address: string,
    number: string,
    city: string,
    neighborhood: string,
    zipCode: ZipCode,
    state: State,
  ) {
    const _address = new Address()
    _address.address = address;
    _address.number = number;
    _address.city = city;
    _address.neighborhood = neighborhood;
    _address.zipCode = zipCode;
    _address.state = state;

    _address.validate();
    return _address
  }

  
}

