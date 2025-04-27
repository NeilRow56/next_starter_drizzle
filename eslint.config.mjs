import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


const compat = new FlatCompat({
 baseDirectory: __dirname
})


const eslintConfig = [
 {
   ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
   "plugins": ["check-file", "n"],
   rules: {
    //  'react/no-unescaped-entities': 'off',
    //  '@typescript-eslint/no-unused-vars': 'off',
    //  '@typescript-eslint/no-empty-object-type': 'error'
    "prefer-arrow-callback": ["error"],
    "prefer-template": ["error"],
    "quotes": ["error", "double"],
    "n/no-process-env": ["error"],
    "check-file/filename-naming-convention": [
      "error",
      {
        "**/*.{ts,tsx}": "KEBAB_CASE"
      },
      {
        "ignoreMiddleExtensions": true
      }
    ],
    "check-file/folder-naming-convention": [
      "error",
      {
        "src/**/!^[.*": "KEBAB_CASE"
      }
    ]
   }
 }
]


export default eslintConfig
