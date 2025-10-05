import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { zustandStorage } from '../storage'
import { createLanguageSlice } from './language'
import { GlobalStore } from './shared.types'
import { createThemeSlice } from './theme'
import { createUserSlice } from './user'

export const useGlobalStore = create<GlobalStore>()(
  persist((...a) => ({ ...createUserSlice(...a), ...createThemeSlice(...a), ...createLanguageSlice(...a) }), {
    name: 'global-storage',
    storage: createJSONStorage(() => zustandStorage),
  }),
)

export * from './shared.types'
