import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/app/utils/paths'

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src={getImgPath('/images/logo/logo.png')}
        alt='logo'
        width={151}
        height={56}
        className='w-full block dark:hidden'     
        style={{ width: '50px'}}
      />
      <Image
        src={getImgPath('/images/logo/white-logo.svg')}
        alt='logo'
        width={151}
        height={56}
        className='w-full hidden dark:block'        
      />
    </Link>
  )
}

export default Logo
