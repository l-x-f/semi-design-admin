/* eslint-disable react-hooks/rules-of-hooks */
import { selector, useSetRecoilState } from 'recoil'
import { appStoreState } from './atom'

const selectorKey = 'App-Selector'

export const appStoreSelector = selector({
  key: selectorKey,
  get: ({ get }) => {
    const isLogin = !!get(appStoreState).token
    return {
      isLogin
    }
  },
  set: ({ set, get }, newValue) => {
    // eslint-disable-next-line no-unused-vars
    const setAppState = useSetRecoilState(appStoreState)
    set(appStoreState, newValue as any)
    setAppState(get(appStoreState))
  }
})
