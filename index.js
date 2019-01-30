module.exports = {
  plugins: ['stylelint-order'],
  rules: {
    'color-no-invalid-hex': true,
    'color-named': 'never',
    'color-no-hex': null,
    'color-hex-case': 'lower',
    'color-hex-length': [
      'short',
      { severity: 'warning' },
    ],

    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'font-family-name-quotes': [
      'always-where-recommended',
      { severity: 'warning' },
    ],

    'font-weight-notation': [
      'named-where-possible',
      { severity: 'warning' },
    ],

    'function-calc-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-blacklist': null,
    'function-whitelist': null,
    'function-url-no-scheme-relative': null,
    'function-url-scheme-blacklist': null,
    'function-url-scheme-whitelist': null,
    'function-comma-newline-after': 'always-multi-line',
    'function-comma-newline-before': 'never-multi-line',
    'function-comma-space-after': [
      'always-single-line',
      { severity: 'error' },
    ],
    'function-comma-space-before': [
      'never',
      { severity: 'error' },
    ],
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',

    'number-max-precision': [
      3,
      { severity: 'warning' },
    ],
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,

    'time-min-milliseconds': null,

    'string-no-newline': true,
    'string-quotes': 'single',

    'length-zero-no-unit': [
      true,
      { severity: 'warning' },
    ],

    'unit-no-unknown': true,
    'unit-blacklist': null,
    'unit-whitelist': null,
    'unit-case': 'lower',

    'property-no-unknown': null,
    'property-no-vendor-prefix': true,
    'property-blacklist': null,
    'property-whitelist': null,
    'property-case': 'lower',

    'shorthand-property-no-redundant-values': [
      true,
      { severity: 'error' },
    ],

    'custom-property-pattern': null,
    'custom-property-empty-line-before': null,

    'value-no-vendor-prefix': true,
    'value-keyword-case': 'lower',

    'value-list-comma-newline-after': null,
    'value-list-comma-newline-before': null,
    'value-list-comma-space-after': [
      'always-single-line',
      { severity: 'error' },
    ],
    'value-list-comma-space-before': [
      'never',
      { severity: 'error' },
    ],
    'value-list-max-empty-lines': 0,

    'keyframe-declaration-no-important': null,
    'keyframes-name-pattern': null,

    'declaration-no-important': true,
    'declaration-property-unit-blacklist': null,
    'declaration-property-unit-whitelist': null,
    'declaration-property-value-blacklist': null,
    'declaration-property-value-whitelist': null,
    'declaration-bang-space-after': null,
    'declaration-bang-space-before': null,
    'declaration-colon-newline-after': null,
    'declaration-colon-space-after': [
      'always',
      { severity: 'error' },
    ],
    'declaration-colon-space-before': [
      'never',
      { severity: 'error' },
    ],
    'declaration-empty-line-before': null,

    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'],
        severity: 'error',
      },
    ],
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-no-redundant-longhand-properties': [
      true,
      { severity: 'warning' },
    ],
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-semicolon-newline-after': [
      'always-multi-line',
      { severity: 'error' },
    ],
    'declaration-block-semicolon-newline-before': null,
    'declaration-block-semicolon-space-after': [
      'always-single-line',
      { severity: 'error' },
    ],
    'declaration-block-semicolon-space-before': [
      'never',
      { severity: 'error' },
    ],
    'declaration-block-trailing-semicolon': 'always',

    'block-no-empty': [
      true,
      { severity: 'error' },
    ],
    'block-closing-brace-empty-line-before': [
      'never',
      { severity: 'warning' },
    ],
    'block-closing-brace-newline-after': [
      'always',
      { severity: 'error' },
    ],
    'block-closing-brace-newline-before': [
      'always-multi-line',
      { severity: 'error' },
    ],
    'block-closing-brace-space-after': null,
    'block-closing-brace-space-before': [
      'always-single-line',
      { severity: 'error' },
    ],
    'block-opening-brace-newline-after': [
      'always-multi-line',
      { severity: 'error' },
    ],
    'block-opening-brace-newline-before': null,
    'block-opening-brace-space-after': [
      'always-single-line',
      { severity: 'error' },
    ],
    'block-opening-brace-space-before': [
      'always-single-line',
      { severity: 'error' },
    ],

    'selector-pseudo-class-no-unknown': null,
    'selector-pseudo-element-no-unknown': null,
    'selector-type-no-unknown': null,
    'selector-attribute-operator-blacklist': null,
    'selector-attribute-operator-whitelist': null,
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'selector-max-attribute': 3,
    'selector-max-class': 3,
    'selector-max-combinators': 3,
    'selector-max-compound-selectors': 3,
    'selector-max-empty-lines': 0,
    'selector-max-id': 1,
    'selector-max-pseudo-class': 2,
    'selector-max-specificity': null,
    'selector-max-type': null,
    'selector-max-universal': 1,
    'selector-nested-pattern': null,
    'selector-no-qualifying-type': [
      true,
      { ignore: ['attribute'] },
    ],
    'selector-pseudo-class-blacklist': null,
    'selector-pseudo-class-whitelist': null,
    'selector-no-vendor-prefix': true,
    'selector-attribute-brackets-space-inside': [
      'never',
      { severity: 'error' },
    ],
    'selector-attribute-operator-space-after': [
      'never',
      { severity: 'error' },
    ],
    'selector-attribute-operator-space-before': [
      'never',
      { severity: 'error' },
    ],
    'selector-attribute-quotes': [
      'always',
      { severity: 'error' },
    ],
    'selector-combinator-space-after': [
      'always',
      { severity: 'error' },
    ],
    'selector-combinator-space-before': [
      'always',
      { severity: 'error' },
    ],
    'selector-descendant-combinator-no-non-space': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': [
      'never',
      { severity: 'error' },
    ],
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'single',
    'selector-type-case': 'lower',

    'selector-list-comma-newline-after': [
      'always-multi-line',
      { severity: 'error' },
    ],
    'selector-list-comma-newline-before': null,
    'selector-list-comma-space-after': [
      'always-single-line',
      { severity: 'error' },
    ],
    'selector-list-comma-space-before': [
      'never',
      { severity: 'error' },
    ],

    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['after-single-line-comment', 'first-nested'],
        severity: 'error',
      },
    ],

    'media-feature-name-value-whitelist': null,
    'media-feature-name-no-unknown': null,
    'media-feature-name-blacklist': null,
    'media-feature-name-whitelist': null,
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-colon-space-after': [
      'always',
      { severity: 'error' },
    ],
    'media-feature-colon-space-before': [
      'never',
      { severity: 'error' },
    ],
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': [
      'never',
      { severity: 'error' },
    ],
    'media-feature-range-operator-space-after': [
      'always',
      { severity: 'error' },
    ],
    'media-feature-range-operator-space-before': [
      'always',
      { severity: 'error' },
    ],

    'media-query-list-comma-newline-after': null,
    'media-query-list-comma-newline-before': null,
    'media-query-list-comma-space-after': [
      'always-single-line',
      { severity: 'error' },
    ],
    'media-query-list-comma-space-before': [
      'never',
      { severity: 'error' },
    ],

    'custom-media-pattern': null,

    'at-rule-no-unknown': null,
    'at-rule-blacklist': null,
    'at-rule-whitelist': null,
    'at-rule-no-vendor-prefix': true,
    'at-rule-empty-line-before': null,
    'at-rule-name-case': 'lower',
    'at-rule-name-newline-after': null,
    'at-rule-name-space-after': [
      'always',
      { severity: 'error' },
    ],
    'at-rule-semicolon-newline-after': [
      'always',
      { severity: 'error' },
    ],
    'at-rule-semicolon-space-before': [
      'never',
      { severity: 'error' },
    ],

    'comment-no-empty': [
      true,
      { severity: 'warning' },
    ],
    'comment-word-blacklist': null,
    'comment-empty-line-before': null,
    'comment-whitespace-inside': [
      'always',
      { severity: 'warning' },
    ],

    'no-descending-specificity': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': null,
    'no-extra-semicolons': [
      true,
      { severity: 'error' },
    ],
    'no-invalid-double-slash-comments': true,
    'max-nesting-depth': 1,
    'no-unknown-animations': null,
    indentation: [
      2,
      {
        indentClosingBrace: false,
        ignore: ['value'],
      },
    ],
    'max-empty-lines': 1,
    'max-line-length': null,
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true,
    'no-empty-first-line': true,

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
      [
        'composes',
        'content',
        'box-sizing',
        {
          properties: [
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',
          ],
        },
        {
          properties: [
            'float',
            'clear',
          ],
        },
        'vertical-align',
        {
          properties: [
            'display',
            'justify-items',
            'justify-content',
            'align-items',
            'align-content',
            'align-self',

            'flex-flow',
            'flex-direction',
            'flex-wrap',

            'flex',
            'flex-grow',
            'flex-shrink',
            'flex-basis',

            'order',
          ],
        },
        {
          properties: [
            'grid',
            'grid-template',
            'grid-template-rows',
            'grid-template-columns',
            'grid-template-areas',

            'grid-auto-rows',
            'grid-auto-columns',
            'grid-auto-flow',
            'grid-gap',
            'grid-row-gap',
            'grid-column-gap',

            'grid-area',

            'grid-row',
            'grid-row-start',
            'grid-row-end',

            'grid-column',
            'grid-column-start',
            'grid-column-end',
          ],
        },
        {
          properties: [
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
        },
        {
          properties: [
            'table-layout',
            'border-collapse',
            'border-spacing',
            'empty-cells',
            'caption-side',
          ],
        },
        {
          properties: [
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
        },
        {
          properties: [
            'color',

            'font',
            'font-style',
            'font-variant',
            'font-weight',
            'font-size',
            'font-family',
            'font-stretch',
          ],
        },
        {
          properties: [
            'quotes',
            'tab-size',
            'line-height',
            'word-spacing',
            'letter-spacing',
            'font-size-adjust',
            'user-select',
          ],
        },
        {
          properties: [
            'direction',
            'text-align',
            'text-align-last',
            'text-justify',

            'white-space',
            'word-break',
            'word-wrap',
          ],
        },
        {
          properties: [
            'text-indent',
            'text-transform',
            'text-decoration',
            'text-decoration-color',
            'text-decoration-line',
            'text-decoration-style',

            'text-rendering',
            'text-shadow',
            'text-overflow',
          ],
        },
        {
          properties: [
            'cursor',
            'pointer-events',
            'appearance',
            'opacity',
            'visibility',
            'backface-visibility',
          ],
        },
        {
          properties: [
            'list-style',
            'list-style-type',
            'list-style-image',
            'list-style-position',
          ],
        },
        {
          properties: [
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
        },
        {
          properties: [
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

            'box-shadow',
          ],
        },
        {
          properties: [
            'filter',
            'backdrop-filter',
          ],
        },
        {
          properties: [
            'fill',
            'fill-opacity',
            'fill-rule',

            'stroke',
            'stroke-dasharray',
            'stroke-dashoffset',
          ],
        },
        {
          properties: [
            'perspective',
            'perspective-origin',

            'transform',
            'transform-origin',
            'transform-style',
          ],
        },
        {
          properties: [
            'overflow',
            'overflow-x',
            'overflow-y',
            'resize',
            'contain',
          ],
        },
        {
          properties: [
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
        },
        {
          properties: [
            'page-break-before',
            'page-break-after',
            'page-break-inside',
          ],
        },
        {
          properties: [
            'counter-reset',
            'counter-increment',
          ],
        },
      ],
      {
        unspecified: 'bottomAlphabetical',
      },
    ],
  },
};
