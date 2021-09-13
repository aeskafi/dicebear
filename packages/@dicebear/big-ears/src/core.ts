import type { Style, StyleSchema } from '@dicebear/core';
import type { Options } from './options';

import schema from './schema.json';
import { getComponents } from './utils/getComponents';
import { getColors } from './utils/getColors';
import { onPreCreate } from './hooks/onPreCreate';
import { onPostCreate } from './hooks/onPostCreate';
import { dimensions } from './meta/components';

export const style: Style<Options> = {
  meta: {
    title: 'Face Generator',
    creator: 'The Visual Team',
    source: 'https://www.figma.com/community/file/986078800058673824',
    license: {
      name: 'CC BY 4.0',
      url: 'https://creativecommons.org/licenses/by/4.0/',
    },
  },
  schema: schema as StyleSchema,
  create: ({ prng, options }) => {
    onPreCreate({ prng, options, preview: false });

    const components = getComponents({ prng, options });
    const colors = getColors({ prng, options });

    onPostCreate({ prng, options, components, colors, preview: false });

    return {
      attributes: {
        viewBox: '0 0 440 440',
        fill: 'none',
        'shape-rendering': 'auto',
      },
      body: `
  <g fill="${colors.hair.value}">
    <path d="M75.869 244.627c-36.175 34.855 11.146 66.785 39.072 66.785 0 24.867 55.776 36.59 85.971 24.867 10.299 18.472 34.463 31.503 74.245 11.723 63.935 3.6 54.469-39.352 70.086-47.957 21.92-12.078 44.653-39.72 21.92-63.233 0-29.143-1.102-56.412-21.92-75.521 8.418-28.564-13.257-57.338-54.815-57.338-27.705-24.005-44.187-7.11-66.074-13.499-65.719-19.183-84.666 13.619-96.269 34.814-15.972-10.973-51.864 14.292-47.602 44.76-30.547 18.876 8.578 61.888-4.614 74.599Z"/>
    <path d="M129.861 94.007c14.209 6.536 20.012 25.103 21.669 32.682l-32.326 26.287c2.25-7.223.355-26.501-2.487-40.142-2.842-13.64-21.551-18.354-35.168-18.828 8.88-3.789 28.063-9.314 48.312 0ZM246.343 68.134c-14.596 5.618-21.569 23.778-23.706 31.236l30.587 28.292c-1.785-7.352 1.333-26.469 5.038-39.902 3.705-13.432 22.676-16.944 36.296-16.55-8.622-4.347-27.414-11.082-48.215-3.076ZM380.13 178.069c-11.702-10.377-31.034-8.216-38.639-6.683l-11.054 40.173c5.707-4.967 24.117-10.991 37.748-13.88 13.631-2.888 25.476 12.342 31.39 24.617-.106-9.655-2.769-29.439-19.445-44.227ZM58.785 230.527c11.702 10.378 31.034 8.217 38.639 6.684l11.054-40.173c-5.707 4.967-24.117 10.991-37.748 13.88-13.631 2.888-25.476-12.342-31.39-24.617.106 9.655 2.768 29.439 19.445 44.226ZM146.861 353.571c14.798-5.066 22.449-22.95 24.865-30.322l-29.502-29.423c1.508 7.413-2.327 26.4-6.535 39.684-4.207 13.284-23.297 16.08-36.893 15.173 8.452 4.668 26.978 12.106 48.065 4.888ZM348.226 314.899c-15.395-2.762-25.671-19.279-29.177-26.199l24.696-33.558c-.365 7.556 6.306 25.742 12.48 38.233 6.174 12.492 25.467 12.36 38.767 9.401-7.646 5.897-24.828 16.058-46.766 12.123Z"/>
  </g>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M304.456 239.21h-170.45v119.525h.011c-.007.213-.01.428-.01.642 0 22.359 38.156 57.948 85.224 57.948 47.068 0 85.225-35.589 85.225-57.948 0-.214-.004-.429-.011-.642h.011V239.21Z" fill="${colors.skin.value}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M134.007 344.673v.589c0-.196.004-.393.01-.589h-.01Zm0 .695v13.367h.01a19.65 19.65 0 0 0-.011.643c0 22.359 38.157 57.948 85.225 57.948s85.225-35.589 85.225-57.948c0-.215-.004-.429-.011-.643h.011v-14.062h-.011c.007.214.011.428.011.642 0 22.359-38.157 57.948-85.225 57.948-47.031 0-85.164-35.533-85.224-57.895Z" fill="#000" fill-opacity=".19"/>
  <ellipse cx="218.588" cy="243.434" rx="85.868" ry="75.449" fill="${colors.skin.value}"/>
  <path d="M241.897 353.512c0 12.298-9.97 22.268-22.268 22.268s-22.268-9.97-22.268-22.268 9.97-22.268 22.268-22.268 22.268 9.97 22.268 22.268Z" fill="#DE8383"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M202.98 368.332c4.065-5.38 10.516-8.857 17.778-8.857 6.608 0 12.543 2.878 16.621 7.448-4.065 5.38-10.516 8.857-17.778 8.857-6.607 0-12.542-2.878-16.621-7.448Z" fill="#C06E6E"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M240.179 344.582H199.28c3.449-7.853 11.307-13.338 20.449-13.338 9.142 0 17.001 5.485 20.45 13.338Z" fill="#F9F9F9"/>
  <rect x="295.115" y="251.171" width="63.237" height="63.316" rx="31.618" fill="${colors.skin.value}"/>
  <rect x="302.141" y="258.207" width="49.184" height="49.246" rx="24.592" fill="#000" fill-opacity=".19"/>
  <rect x="297.925" y="270.87" width="26.7" height="26.733" rx="13.35" fill="${colors.skin.value}"/>
  <rect width="63.237" height="63.316" rx="31.618" transform="matrix(-1 0 0 1 147.091 251.171)" fill="${colors.skin.value}"/>
  <rect width="49.184" height="49.246" rx="24.592" transform="matrix(-1 0 0 1 140.065 258.207)" fill="#000" fill-opacity=".19"/>
  <rect width="26.7" height="26.733" rx="13.35" transform="matrix(-1 0 0 1 144.281 270.87)" fill="${colors.skin.value}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M169.407 269.799a17.104 17.104 0 0 0-4.352 11.423c0 9.484 7.688 17.171 17.171 17.171 7.772 0 14.339-5.165 16.455-12.25l-29.274-16.344ZM267.169 269.799a17.104 17.104 0 0 1 4.352 11.424c0 9.483-7.687 17.17-17.171 17.17-7.772 0-14.339-5.165-16.454-12.25l29.273-16.344Z" fill="#fff"/>
  <path d="M168.289 253.237c5.389 3.593 28.742 18.683 35.209 22.635M267.809 253.597c-5.389 3.593-28.742 18.682-35.209 22.634" stroke="#000" stroke-width="2.642" stroke-linecap="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M176.653 273.844a9.245 9.245 0 0 0 5.573 16.624c4.811 0 8.765-3.676 9.204-8.373l-14.777-8.251ZM259.923 273.844a9.232 9.232 0 0 1 3.672 7.378 9.245 9.245 0 0 1-18.45.873l14.778-8.251Z" fill="#000"/>
  <g fill="#000" fill-opacity=".19">
    <rect x="151.403" y="316.344" width="9.24" height="9.24" rx="4.62"/>
    <rect x="168.728" y="305.949" width="9.24" height="10.396" rx="4.62"/>
    <rect x="182.589" y="316.344" width="9.24" height="9.24" rx="4.62"/>
    <rect x="247.272" y="316.344" width="9.24" height="9.24" rx="4.62"/>
    <rect x="264.598" y="305.949" width="9.24" height="10.396" rx="4.62"/>
    <rect x="278.459" y="316.344" width="9.24" height="9.24" rx="4.62"/>
  </g>
  <path fill-rule="evenodd" clip-rule="evenodd" d="m210.768 307.632-.179 1.87c-.592 6.185 4.271 11.537 10.485 11.537 6.346 0 11.251-5.571 10.448-11.867l-.177-1.382c-1.06 4.632-5.207 8.18-10.271 8.18-5.108 0-9.303-3.615-10.306-8.338Z" fill="#000" fill-opacity=".19"/>
  <path d="M139.894 290.473c-12.754 0-15.654-28.743-14.384-43.618h14.384c-3.257 8.323-1.701 15.572-.803 24.551 1.045 10.448 11.145 2.685 13.28-1.435.258 8.2-6.281 20.502-12.477 20.502Z" fill="${colors.hair.value}"/>
  <g>
    <path d="M298.655 290.473c12.754 0 15.654-28.743 14.384-43.618h-14.384c3.257 8.323 1.701 15.572.803 24.551-1.045 10.448-11.145 2.685-13.28-1.435-.257 8.2 6.281 20.502 12.477 20.502Z" fill="${colors.hair.value}"/>
  </g>
  <g>
    <path d="M317.131 251.857a96.911 96.911 0 0 0-28.381-68.518 96.887 96.887 0 0 0-105.6-21.005 96.89 96.89 0 0 0-52.441 52.441 96.892 96.892 0 0 0-7.376 37.082h193.798Z" fill="${colors.hair.value}"/>
  </g>
`,
    };
  },
  preview: ({ prng, options, property }) => {
    const componentGroup = property.toString();
    const colorGroup = property.toString().replace(/Color$/, '');

    onPreCreate({ prng, options, preview: true });

    const components = getComponents({ prng, options });
    const colors = getColors({ prng, options });

    onPostCreate({ prng, options, components, colors, preview: true });

    if (componentGroup in components) {
      const { width, height } = dimensions[componentGroup]!;

      return {
        attributes: {
          viewBox: `0 0 ${width} ${height}`,
          fill: 'none',
          'shape-rendering': 'auto',
        },
        body: components[componentGroup]?.value(components, colors) ?? '',
      };
    }

    if (colorGroup in colors) {
      return {
        attributes: {
          viewBox: `0 0 1 1`,
          fill: 'none',
          'shape-rendering': 'auto',
        },
        body: `<rect width="1" height="1" fill="${colors[colorGroup].value}" />`,
      };
    }

    return undefined;
  },
};