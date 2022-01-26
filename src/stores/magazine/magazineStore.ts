import { toJS } from 'mobx'
import { get } from '@/lib/utils/request'
import { Magazine, MagazineRes } from '@/stores/magazine/types'
import { apiUrl } from '@/lib/variables/consts'

export function magazineStore() {
  return {
    data: {
      list: [] as Magazine[],
      loading: false,
    },
    // getter
    get list() {
      return toJS(this.data.list)
    },
    // api
    async getMagazineList() {
      const { pagePostData = [] } = (await get<MagazineRes>(`${apiUrl}/stage/magazine/post?page=1&size=12`)) || {}
      this.data.list = pagePostData
    },
  }
}

export type MagazineStore = ReturnType<typeof magazineStore>
