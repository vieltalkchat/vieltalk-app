import { defineConfig } from '@lingui/cli'

export default defineConfig({
  sourceLocale: 'en',
  locales: ['en', 'km'],
  catalogs: [
    {
      path: '<rootDir>/locale/locales/{locale}/messages',
      include: ['<rootDir>/app', '<rootDir>/components'],
    },
  ],
  format: 'po',
  orderBy: 'origin',
  fallbackLocales: {
    km: ['en'],
  },
})
