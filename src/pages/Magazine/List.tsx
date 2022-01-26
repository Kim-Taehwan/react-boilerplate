import { useStore } from '@/stores'
import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import dayjs from 'dayjs'
import { dateFormat } from '@/lib/variables/consts'
import Robopick from '@/components/systems/Robopick'
import Card from '@/components/contents/Card'

function List() {
  const { magazineStore } = useStore()
  const { list, getMagazineList } = magazineStore

  async function onMount() {
    await getMagazineList()
  }

  useEffect(() => {
    onMount()
  }, [])

  return (
    <div>
      <h2 className="h2">Trenbe Magazine List</h2>

      <div className="row my-4">
        {/* https://getbootstrap.com/docs/4.3/components/card/ */}
        {list.map((magazine) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4" key={magazine.id}>
            <Card
              image={magazine.thumbnail}
              title={magazine.title}
              description={
                <>
                  {magazine.subTitle}
                  <div className="text-secondary text-right">{dayjs(magazine.createdDate).format(dateFormat)}</div>
                </>
              }
              footer={
                <a href={`https://www.trenbe.com/magazine/${magazine.id}`} className="btn btn-primary" target="_blank" rel="noreferrer">
                  자세히 보기
                </a>
              }
            />
          </div>
        ))}
      </div>

      <hr />

      <Robopick />
    </div>
  )
}

export default observer(List)
