module.exports = {
  extends: ['./order'],
  rules: {
    'color-no-invalid-hex': true,
    'color-function-notation': 'modern',
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

    'time-min-milliseconds': [
      50,
      { ignore: ['delay'] },
    ],

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
    'at-rule-property-requirelist': null,
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
    linebreaks: 'unix',
    'no-empty-first-line': true,
    'unicode-bom': 'never',

    'alpha-value-notation': 'percentage',
    'hue-degree-notation': 'angle',
  },
};
