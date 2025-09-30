import { StateCreator } from 'zustand'
import { GlobalStore } from './index'

export enum ThemeOption {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}

export interface ThemeSlice {
  currentTheme: ThemeOption
  setTheme: (theme: ThemeOption) => void
}

export const createThemeSlice: StateCreator<GlobalStore, [['zustand/persist', unknown]], [], ThemeSlice> = (set) => ({
  currentTheme: ThemeOption.SYSTEM,
  setTheme: (theme) =>
    set({
      currentTheme: theme,
    }),
})
