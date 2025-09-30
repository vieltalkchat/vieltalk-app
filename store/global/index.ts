import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { zustandStorage } from '..'
import { createThemeSlice, ThemeSlice } from './theme'
import { createUserSlice, UserSlice } from './user'

export type GlobalStore = UserSlice & ThemeSlice

export const useGlobalStore = create<GlobalStore>()(
  persist((...a) => ({ ...createUserSlice(...a), ...createThemeSlice(...a) }), {
    name: 'global-storage',
    storage: createJSONStorage(() => zustandStorage),
  }),
)
