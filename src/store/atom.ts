/* eslint-disable indent */
import { atom } from 'recoil'
import { localStorageEffect } from './utils'

interface IBaseStore {
  userInfo: Record<string, any>
  breadcrumb: Record<string, any>
  token: string
}

export const atomKey = 'App-State'

export const appStoreState = atom<IBaseStore>({
  key: atomKey,
  default: {
    userInfo: {},
    breadcrumb: [],
    token: ''
  },
  effects_UNSTABLE: [localStorageEffect(atomKey)]
})
