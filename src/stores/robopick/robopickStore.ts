import { toJS } from 'mobx'
import { get } from '@/lib/utils/request'
import { RobopickData, RobopickRes } from '@/stores/robopick/types'

export function robopickStore() {
  return {
    data: {
      list: [] as RobopickData[],
      loading: false,
    },
    // getter
    get list() {
      return toJS(this.data.list)
    },
    // api
    async getRobopickList() {
      this.data.list = (await get<RobopickRes>('https://service-beta.trenbe.com/specialevent/feed/list?page=1&eventId=1')) || []
    },
  }
}

export type RobopickStore = ReturnType<typeof robopickStore>
