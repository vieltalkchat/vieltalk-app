import { Stack } from 'expo-router'

export type ScreenType = Parameters<typeof Stack.Screen>[0] & { isProtected?: boolean }

/**
 * Routes for the whole app
 * @type {enum}
 * @var {string} value - Path to screen file
 */
export enum ROUTE {
  HOME = 'index',
  LOGIN = 'login',
}

/**
 * App screen definitions
 * @type {ScreenType[]}
 */
export const ROUTES: ScreenType[] = [
  {
    name: ROUTE.HOME,
    options: {
      title: 'Home',
    },
  },
  {
    name: ROUTE.LOGIN,
    options: {
      title: 'Login',
    },
  },
]
