import { ValueTransformer } from 'typeorm';
import { State } from './state.vo';

export const StateTransformer: ValueTransformer = {
  to(value: State): string {
    return value?.getValue() ?? null;
  },
  from(value: string): State {
    return new State(value);
  },
};
