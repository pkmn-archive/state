import {Format, ID} from 'pkmn';

import {Pokemon} from './pokemon';

export interface PersistentEffect<T> {
  type: T;
  id: ID;
  source?: Pokemon;
  sourcePosition?: number;
  duration?: number;  // PERCEIVE: range
}
