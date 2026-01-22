'use client'

import { useEffect, useState } from 'react'
import { RecordType } from '@/app/types/record'
import Image from 'next/image'
import RecordSkeleton from '../../Skeleton/Record'
import { getDataPath, getImgPath } from '@/app/utils/paths'

const Records = () => {
  const [record, setRecord] = useState<RecordType[]>([])
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath('/data.json'))
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setRecord(data.RecordData)
      } catch (error) {
        console.error('Error fetching service', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section>
      <div className='container'>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center gap-6'>
          {Loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <RecordSkeleton key={i} />
              ))
            : record.map((item, i) => (
                <div key={i}>
                  <div className='border border-darkblue/10 dark:border-white/10 rounded-lg flex flex-col gap-4 items-center justify-center px-4 py-8 shadow dark:shadow-white/10'>
                    <div className='p-2 bg-primary rounded-full w-fit'>
                      <Image
                        src={getImgPath(item.imgSrc)}
                        alt={item.imgSrc}
                        width={32}
                        height={32}
                      />
                    </div>
                    <h4 className='text-center'>
                      {item.digit}
                    </h4>
                    <p className='text-center text-base font-normal'>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}

export default Records
