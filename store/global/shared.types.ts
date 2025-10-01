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

export enum ThemeOption {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}

export interface ThemeSlice {
  currentTheme: ThemeOption
  setTheme: (theme: ThemeOption) => void
}

export type GlobalStore = UserSlice & ThemeSlice
