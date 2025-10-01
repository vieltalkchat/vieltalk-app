import { StateCreator } from 'zustand'
import { AppLanguage, GlobalStore, LanguageSlice } from './shared.types'

export const createLanguageSlice: StateCreator<GlobalStore, [['zustand/persist', unknown]], [], LanguageSlice> = (
  set,
) => ({
  preferredLanguage: AppLanguage.EN,
  setPreferredLanguage: (language) =>
    set({
      preferredLanguage: language,
    }),
})
