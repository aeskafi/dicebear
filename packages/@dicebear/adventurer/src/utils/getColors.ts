import type { Prng } from '@dicebear/core';
import type { Options } from '../options';
import type { ColorPickCollection } from '../static-types';
import { pickColor } from './pickColor';

type Props = {
  prng: Prng;
  options: Options;
};

export function getColors({ prng, options }: Props): ColorPickCollection {
  return {
    skin: pickColor({
      prng,
      group: 'skin',
      values: options.skinColor,
    }),
    hair: pickColor({
      prng,
      group: 'hair',
      values: options.hairColor,
    }),
  };
}