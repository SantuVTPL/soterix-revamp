import { SIDEBAR_ITEMS } from '@/constants/layout'
import Image from 'next/image'
import SidebarItem from './sidebar-item'
import Link from 'next/link'

function Sidenav() {
  return (
    <aside className='shrink-0 w-18 h-full p-4 flex flex-col gap-10 items-center border-e border-border2'>
        <Link href='/'>
            <Image src={'/assets/logo-sm.png'} alt='logo' width={44} height={44} priority />
        </Link>
        <div className='flex flex-col gap-6'>
            {
                SIDEBAR_ITEMS.map((item, index) => (
                    <SidebarItem key={index} item={item} />
                ))
            }
        </div>
    </aside>
  )
}

export default Sidenav