'use client'

import { SpecializeType } from '@/app/types/specialize'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import SpecializeSkeleton from '../../Skeleton/Specialize'
import { getDataPath, getImgPath } from '@/app/utils/paths'

const Specialize = () => {
  const [specialization, setSpecialization] = useState<SpecializeType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath('/data.json'))
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setSpecialization(data.SpecializeData)
      } catch (error) {
        console.error('Error fetching service', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='expertise' className='scroll-mt-12'>
      <div className='container'>
        <div className='text-center mb-8'>
          <h2 className='mb-6'>My Expertise</h2>
          <p className='text-lg font-normal max-w-2xl mx-auto'>
            Our team crafts creative strategies that elevate your brand, engage
            your audience, and drive results.
          </p>
        </div>
        {/*  */}
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <SpecializeSkeleton key={i} />
              ))
            : specialization.map((item, i) => (
                <div key={i}>
                  <div className='bg-secondary dark:bg-darklight rounded-lg p-8'>
                    <div className='p-3 rounded-lg bg-primary w-fit mb-8 shadow-lg shadow-primary/30'>
                      <Image
                        src={getImgPath(item.imgSrc)}
                        alt={item.title}
                        width={24}
                        height={24}
                      />
                    </div>
                    <div>
                      <h5 className='font-bold mb-2'>{item.title}</h5>
                      <p className='text-base font-normal max-w-xs'>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}

export default Specialize
