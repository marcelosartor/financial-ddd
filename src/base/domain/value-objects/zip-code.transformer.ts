import { ValueTransformer } from 'typeorm';
import { ZipCode } from './zip-code.vo';


export const ZipCodeTransformer: ValueTransformer = {
  to(value: ZipCode): string {
    return value.toString()
  },
  from(value: string): ZipCode {
    return new ZipCode(value);
  },
};
