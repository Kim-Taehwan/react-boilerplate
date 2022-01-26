import React, { useEffect } from 'react'
import { useStore } from '@/stores'
import { observer } from 'mobx-react'
import dayjs from 'dayjs'
import { dateFormat } from '@/lib/variables/consts'
import isEmpty from 'lodash/isEmpty'
import Card from '@/components/contents/Card'

function Robopick() {
  const { robopickStore } = useStore()
  const { list, getRobopickList } = robopickStore

  async function onMount() {
    // 비어 있는 경우만 호출 (한 번만 호출하겠다는 의미)
    if (isEmpty(list)) {
      await getRobopickList()
    }
  }

  useEffect(function () {
    onMount()
  }, [])

  return (
    <div>
      <h2 className="h2">Robopick</h2>

      <div className="row mt-4">
        {list.map((robopick) => (
          <div className="mb-3 col-lg-6 col-md-12" key={robopick.id}>
            <Card
              horizontal
              image={robopick.imageUrl}
              title={
                <>
                  <img className="mr-2" src={robopick.profileImage} alt="robopick profile image" style={{ width: '25px' }} />
                  {robopick.profileName}
                </>
              }
              description={<div dangerouslySetInnerHTML={{ __html: robopick.description }} />}
              footer={<small className="text-muted">{dayjs(robopick.createdDate).format(dateFormat)}</small>}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default observer(Robopick)
