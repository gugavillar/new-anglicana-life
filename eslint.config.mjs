import js from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'
import globals from 'globals'
import prettierPlugin from 'eslint-plugin-prettier'
import importPlugin from 'eslint-plugin-import'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    ignores: ['.next/**', 'node_modules/**', 'dist/**'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@next/next': nextPlugin,
      prettier: prettierPlugin,
      import: importPlugin,
    },

    rules: {
      /* React */
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      /* TypeScript */
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      /* Estilo */
      'no-console': 'warn',
      semi: ['error', 'never'],

      /* Ordenação de imports */
      'import/order': [
        'error',
        {
          groups: [
            ['external', 'builtin'],
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: '{react,react-dom/**,next,next/**}',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '{@/components,@/components/Icons}',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '{@prismicio/**,@prismicio/*,@/prismicio,@/prismic-types}',
              group: 'external',
              position: 'before',
            },
          ],

          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',

          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      /* Prettier integrado */
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          trailingComma: 'all',
          printWidth: 100,
        },
      ],
    },

    settings: {
      react: { version: 'detect' },
    },
  },
]
