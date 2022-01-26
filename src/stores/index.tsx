import React from 'react'
import { useLocalObservable } from 'mobx-react'
import { rootStore, RootStore } from '@/stores/rootStore'
import { loginStore, LoginStore } from '@/stores/loginStore'
import { magazineStore, MagazineStore } from '@/stores/magazine/magazineStore'
import { robopickStore, RobopickStore } from '@/stores/robopick/robopickStore'

interface Store {
  rootStore: RootStore
  loginStore: LoginStore
  magazineStore: MagazineStore
  robopickStore: RobopickStore
}

interface TStoreProvider {
  children: React.ReactNode
}

const storeContext = React.createContext<Store | null>(null)

export function StoreProvider({ children }: TStoreProvider) {
  return (
    <storeContext.Provider
      value={{
        rootStore: useLocalObservable(rootStore),
        loginStore: useLocalObservable(loginStore),
        magazineStore: useLocalObservable(magazineStore),
        robopickStore: useLocalObservable(robopickStore),
      }}
    >
      {children}
    </storeContext.Provider>
  )
}

export const useStore = () => {
  const store = React.useContext(storeContext)
  if (!store) throw new Error('useStore must be used within a StoreProvider.')

  return store
}
