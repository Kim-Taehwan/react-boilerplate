import { toJS } from 'mobx'
import { get } from '@/lib/utils/request'

export interface UserInfo {
  uid: number
  email: string
  language: string
}

export interface CheckLoginAPI {
  isLoggedIn: boolean
  info: UserInfo
}

export function loginStore() {
  return {
    data: {
      isLoggedIn: false,
      userInfo: {} as UserInfo,
    },
    async checkLogin(): Promise<boolean> {
      const { isLoggedIn, info } = (await get<CheckLoginAPI>('/users/my')) || {}
      this.data.isLoggedIn = isLoggedIn
      this.data.userInfo = info

      return isLoggedIn
    },
    async logout(): Promise<boolean> {
      const { success } = await get<{ success: boolean }>('/auth/logout')
      return success
    },
    getUserInfo(): UserInfo {
      return toJS(this.data.userInfo) || {}
    },
  }
}

export type LoginStore = ReturnType<typeof loginStore>
