import { StateCreator } from 'zustand'
import { GlobalStore } from '.'

// TODO: To be defined
interface UserInfoModel {
  id: string
}

export interface UserSlice {
  isLoggedIn: boolean
  userInfo: UserInfoModel | null
  setUserInfo: (userInfo: UserInfoModel) => void
  setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const createUserSlice: StateCreator<GlobalStore, [['zustand/persist', unknown]], [], UserSlice> = (set) => ({
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
})
