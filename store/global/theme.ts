import { StateCreator } from 'zustand'
import { GlobalStore, ThemeOption, ThemeSlice } from './shared.types'

export const createThemeSlice: StateCreator<GlobalStore, [['zustand/persist', unknown]], [], ThemeSlice> = (set) => ({
  currentTheme: ThemeOption.SYSTEM,
  setTheme: (theme) =>
    set({
      currentTheme: theme,
    }),
})
