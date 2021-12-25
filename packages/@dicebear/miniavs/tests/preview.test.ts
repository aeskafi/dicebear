import { createPreview } from '@dicebear/core';
import * as style from '../dist';
import * as fs from 'fs';
import * as path from 'path';

const data = [
  [style, { seed: 'test' }, 'head'],
  [style, { seed: 'test' }, 'body'],
  [style, { seed: 'test' }, 'hair'],
  [style, { seed: 'test' }, 'mouth'],
  [style, { seed: 'test' }, 'eyes'],
  [style, { seed: 'test' }, 'glasses'],
  [style, { seed: 'test' }, 'mustache'],
  [style, { seed: 'test' }, 'blushes'],
  [style, { seed: 'test' }, 'skinColor'],
  [style, { seed: 'test' }, 'hairColor'],
  [style, { seed: 'test' }, 'bodyColor'],
  [style, { seed: 'test', backgroundColor: ['#ff0000'] }, 'backgroundColor'],
] as Array<Parameters<typeof createPreview>>;

data.forEach((params, key) => {
  test(`Create avatar #${key}`, async () => {
    const svgComponent = path.resolve(__dirname, 'svg/preview', `${key}.svg`);

    if (false === fs.existsSync(svgComponent)) {
      if (false === fs.existsSync(path.dirname(svgComponent))) {
        fs.mkdirSync(path.dirname(svgComponent), { recursive: true });
      }

      fs.writeFileSync(svgComponent, createPreview(...params), {
        encoding: 'utf-8',
      });
    }

    const svg = fs.readFileSync(svgComponent, { encoding: 'utf-8' });

    expect(createPreview(...params)).toEqual(svg);
  });
});