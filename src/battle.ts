import {Format, ID} from 'pkmn';

import {Field} from './field';
import {Side} from './side';

export interface Battle {
  readonly format: Format;
  readonly gameType: 'Singles'|'Doubles'|'Triples'|'Rotation';

  readonly field: Field;
  readonly p1: Side;
  readonly p2: Side;

  // The current decision state of the Battle (see Side). NOTE: Unlike with
  // Side, this can never be 'wait' as one player will be in the 'switch' state.
  state: 'preview'|'move'|'switch';

  // The current turn number.
  turn: number;

  // Seed for the PRNG (randomly chosen if unset).
  readonly prngSeed?: Readonly<[number, number, number, number]>;

  // Incremented every successful switch (where the switched in Pokemon didn't
  // faint). Used for determing a Pokemon's abilityOrder.
  abilityOrder: number;

  // The last successful move that occurred on either side (Copycat).
  lastMove?: ID;

  // RBY: The last damage caused by a move (Counter).
  lastDamage?: number;

  // TODO Endless Battle Clause
  // staleWarned?: boolean;
}
