import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavLinkType } from '@/app/types/navlink'

const MobileHeaderLink: React.FC<{ item: NavLinkType }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen)
  }
  const path = usePathname()

  return (
    <div className='relative w-full'>
      <Link
        href={item.href}
        onClick={item.submenu ? handleToggle : undefined}
        className={`flex items-center justify-between w-full py-2 text-darkblue dark:text-white focus:outline-none hover:text-primary dark:hover:text-primary hover:cursor-pointer ${
          item.href === path ? '!text-primary dark:!text-primary' : null
        } `}>
        {item.label}
        {item.submenu && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.5em'
            height='1.5em'
            viewBox='0 0 24 24'>
            <path
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='m7 10l5 5l5-5'
            />
          </svg>
        )}
      </Link>
      {submenuOpen && item.submenu && (
        <div className='bg-white  dark:bg-white/10  p-2 w-full'>
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className='block py-2 text-darkblue dark:text-white hover:bg-neutral-50 dark:hover:bg-darkmode/10 hover:text-primary dark:hover:text-primary'>
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default MobileHeaderLink
