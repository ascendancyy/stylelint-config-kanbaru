function createGroups(item) {
  if (Array.isArray(item)) {
    const group = Object.create(null);
    group.properties = item;
    return group;
  }
  return item;
}

const order = [
  'composes',
  'content',
  'box-sizing',
  [
    'position',
    'top',
    'right',
    'bottom',
    'left',
    'z-index',
  ],
  [
    'float',
    'clear',
  ],
  [
    'vertical-align',
    'object-position',
    'object-fit',
  ],
  [
    'display',

    'place-items',
    'place-content',
    'place-self',

    'justify-items',
    'justify-content',
    'justify-self',
    'align-items',
    'align-content',
    'align-self',

    'row-gap',
    'column-gap',
    'gap',
  ],
  [
    'flex-flow',
    'flex-direction',
    'flex-wrap',

    'flex',
    'flex-grow',
    'flex-shrink',
    'flex-basis',

    'order',
  ],
  [
    'grid',
    'grid-template',
    'grid-template-rows',
    'grid-template-columns',
    'grid-template-areas',

    'grid-auto-rows',
    'grid-auto-columns',
    'grid-auto-flow',

    'grid-area',

    'grid-row',
    'grid-row-start',
    'grid-row-end',
    'grid-column',
    'grid-column-start',
    'grid-column-end',
  ],
  [
    'columns',
    'column-width',
    'column-count',

    'column-fill',
    'column-span',
    'column-gap',

    'column-rule',
    'column-rule-width',
    'column-rule-style',
    'column-rule-color',
  ],
  [
    'table-layout',
    'border-collapse',
    'border-spacing',
    'empty-cells',
    'caption-side',
  ],
  [
    'margin',
    'margin-top',
    'margin-right',
    'margin-bottom',
    'margin-left',

    'min-width',
    'width',
    'max-width',

    'min-height',
    'height',
    'max-height',

    'padding',
    'padding-top',
    'padding-right',
    'padding-bottom',
    'padding-left',
  ],
  [
    'color',
    'caret-color',

    'font',
    'font-style',
    'font-weight',
    'font-size',
    'font-stretch',
    'font-family',
    'font-language-override',

    'font-variant',
    'font-variant-position',
    'font-variant-numeric',
    'font-variant-ligatures',
    'font-variant-east-asian',
    'font-variant-caps',
    'font-variant-alternates',

    'font-feature-settings',
    'font-variation-settings',

    'font-synthesis',
  ],
  [
    'quotes',
    'hyphens',
    'hanging-punctuation',

    'widows',
    'orphans',

    'line-height',
    'line-height-step',
    'tab-size',
    'font-kerning',
    'word-spacing',
    'letter-spacing',

    'font-size-adjust',
    'font-optical-sizing',

    'user-select',
  ],
  [
    'unicode-bidi',
    'direction',
    'text-align',
    'text-align-last',
    'text-justify',

    'writing-mode',
    'text-orientation',
    'text-combine-upright',

    'white-space',
    'word-break',
    'word-wrap',
    'line-break',
  ],
  [
    'text-indent',
    'text-transform',
    'text-decoration',
    'text-decoration-color',
    'text-decoration-line',
    'text-decoration-style',
    'text-decoration-thickness',
    'text-decoration-skip',
    'text-decoration-skip-ink',

    'text-emphasis',
    'text-emphasis-color',
    'text-emphasis-position',
    'text-emphasis-style',

    'text-underline-position',
    'text-underline-offset',

    'text-rendering',
    'text-shadow',
    'text-overflow',
  ],
  [
    'cursor',
    'pointer-events',
    'appearance',
    'opacity',
    'visibility',
    'backface-visibility',
    'isolation',
  ],
  [
    'list-style',
    'list-style-type',
    'list-style-image',
    'list-style-position',
  ],
  [
    'outline',
    'outline-color',
    'outline-style',
    'outline-width',
    'outline-offset',

    'border',
    'border-width',
    'border-style',
    'border-color',

    'border-top',
    'border-top-width',
    'border-top-style',
    'border-top-color',

    'border-right',
    'border-right-width',
    'border-right-style',
    'border-right-color',

    'border-bottom',
    'border-bottom-width',
    'border-bottom-style',
    'border-bottom-color',

    'border-left',
    'border-left-width',
    'border-left-style',
    'border-left-color',

    'border-image',
    'border-image-source',
    'border-image-slice',
    'border-image-width',
    'border-image-outset',
    'border-image-repeat',

    'border-radius',
    'border-top-left-radius',
    'border-top-right-radius',
    'border-bottom-left-radius',
    'border-bottom-right-radius',
  ],
  [
    'background',
    'background-image',
    'background-position',
    'background-position-x',
    'background-position-y',
    'background-size',
    'background-repeat',
    'background-origin',
    'background-clip',
    'background-attachment',
    'background-color',
    'background-blend-mode',

    'box-shadow',

    'box-decoration-break',
  ],
  [
    'filter',
    'backdrop-filter',
    'mix-blend-mode',
    'image-rendering',
  ],
  [
    'mask',
    'mask-image',
    'mask-mode',
    'mask-repeat',
    'mask-position',
    'mask-clip',
    'mask-origin',
    'mask-size',
    'mask-composite',
    'mask-type',

    'mask-border',
    'mask-border-mode',
    'mask-border-outset',
    'mask-border-repeat',
    'mask-border-slice',
    'mask-border-source',
    'mask-border-width',
  ],
  [
    'clip',
    'clip-path',
  ],
  [
    'fill',
    'fill-opacity',
    'fill-rule',

    'stroke',
    'stroke-dasharray',
    'stroke-dashoffset',

    'paint-order',
  ],
  [
    'perspective',
    'perspective-origin',

    'transform',
    'transform-origin',
    'transform-style',
  ],
  [
    'overflow',
    'overflow-x',
    'overflow-y',
    'overflow-wrap',
    'resize',
    'contain',

    'scroll-behavior',
  ],
  [
    'transition',
    'transition-property',
    'transition-duration',
    'transition-timing-function',
    'transition-delay',

    'animation',
    'animation-name',
    'animation-duration',
    'animation-timing-function',
    'animation-delay',
    'animation-iteration-count',
    'animation-direction',
    'animation-fill-mode',
    'animation-play-state',

    'will-change',
  ],
  [
    'break-before',
    'break-after',
    'break-inside',
  ],
  [
    'counter-reset',
    'counter-increment',
  ],
].map(createGroups);

module.exports = {
  plugins: ['stylelint-order'],
  rules: {
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        { type: 'at-rule', name: 'extend' },
        'declarations',
        { type: 'at-rule', name: 'media' },
        'at-rules',
        { type: 'at-rule', name: 'include', parameter: 'classless' },
        'rules',
      ],
      {
        unspecified: 'bottom',
      },
    ],
    'order/properties-order': [
      order,
      {
        unspecified: 'bottomAlphabetical',
        emptyLineBeforeUnspecified: 'always',
      },
    ],
  },
};
