import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { zustandStorage } from '.'

// TODO: To be defined
interface UserInfoModel {
  id: string
}

interface UserStore {
  isLoggedIn: boolean
  userInfo: UserInfoModel | null
  setUserInfo: (userInfo: UserInfoModel) => void
  setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const userStore = create<UserStore>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      userInfo: null,
      setUserInfo: (userInfo) =>
        set({
          userInfo,
        }),
      setIsLoggedIn: (isLoggedIn) =>
        set({
          isLoggedIn,
        }),
    }),
    { name: 'user-storage', storage: createJSONStorage(() => zustandStorage) },
  ),
)
