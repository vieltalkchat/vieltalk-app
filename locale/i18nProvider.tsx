import { AppLanguage, useGlobalStore } from '@/store'
import { i18n } from '@lingui/core'
import { I18nProvider as DefaultI18nProvider } from '@lingui/react'
import { useEffect } from 'react'
import { messages as enMessages } from './locales/en/messages'
import { messages as kmMessages } from './locales/km/messages'

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const preferredLanguage = useGlobalStore((state) => state.preferredLanguage)

  useEffect(() => {
    switch (preferredLanguage) {
      case AppLanguage.KM:
        i18n.loadAndActivate({ locale: preferredLanguage, messages: kmMessages })
        break
      case AppLanguage.EN:
        i18n.loadAndActivate({ locale: preferredLanguage, messages: enMessages })
        break
      default:
        i18n.loadAndActivate({ locale: AppLanguage.EN, messages: enMessages })
        break
    }
  }, [preferredLanguage])

  return <DefaultI18nProvider i18n={i18n}>{children}</DefaultI18nProvider>
}
