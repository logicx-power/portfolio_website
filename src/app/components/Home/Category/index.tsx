'use client'

import { CategoryType } from '@/app/types/category'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import CategorySkeleton from '../../Skeleton/Category'
import { getDataPath, getImgPath } from '@/app/utils/paths'

const Category = () => {
  const [category, setCategory] = useState<CategoryType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath('/data.json'))
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setCategory(data.CategoryData)
      } catch (error) {
        console.error('Error fetching service', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='categories' className='scroll-mt-12'>
      <div className='container'>
        <div className='text-center'>
          <h2>Discover What I Can Do</h2>
          <p className='text-lg font-normal max-w-md mx-auto my-6'>
            Dive into our categories to find tailored services that drive
            results.
          </p>
        </div>
        {/* grid layout */}
        <div>
          <div className='grid lg:grid-cols-4 grid-cols-2 gap-6'>
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <CategorySkeleton key={i} />
                ))
              : category.map((item, i) => (
                  <div
                    key={i}
                    className={`${
                      i === 0
                        ? 'col-span-2 row-span-2'
                        : 'sm:col-span-1 col-span-2 row-span-1'
                    }`}>
                    <div className='relative group overflow-hidden w-full rounded-lg'>
                      <Image
                        src={getImgPath(item.imgSrc)}
                        alt={item.title}
                        width={570}
                        height={394}
                        className='w-full rounded-lg'
                      />
                      <Link href='/' target='_blank'>
                        <div className='absolute inset-0 bg-gradient-to-b from-darklight/0 from-60% to-darklight/80 lg:translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-lg flex items-end'>
                          <div className={`${i === 0 ? 'p-10' : 'p-5'}`}>
                            <div className='flex items-center gap-3'>
                              <Image
                                src={getImgPath('/images/banner/greentick.svg')}
                                alt='tick'
                                width={16}
                                height={16}
                              />
                              <p className='text-2xl font-medium text-white'>
                                {item.title}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Category
