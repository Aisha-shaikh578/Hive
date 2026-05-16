import React from 'react'
import { 
  HomeIcon,
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import HiveLogo from '../public/assets/HiveLogo.jpg'

const SideBar = () => {
  return (
    <nav className='hidden sm:flex flex-col sticky top-0 p-3 h-screen xl:ml-20'>
    <div className='h-full relative'>
      <div className='py-3'>
        <Image src={HiveLogo} alt='logo' width={58} height={48} className='rounded-3xl'/>
      </div>

      <div>
        <ul>
          <SideBarLinks Icon={HomeIcon} text='Home'/>
          <SideBarLinks Icon={HashtagIcon} text='Explore'/>
          <SideBarLinks Icon={HomeIcon} text='Home'/>
          <SideBarLinks Icon={BellIcon} text='Notifications'/>
          <SideBarLinks Icon={InboxIcon} text='Messages'/>
          <SideBarLinks Icon={BookmarkIcon} text='Save'/>
          <SideBarLinks Icon={UserIcon} text='Profile'/>
          <SideBarLinks Icon={EllipsisHorizontalCircleIcon} text='More'/>
        </ul>
      </div>

      <div className='absolute bottom-0'>
        <UserIcon className='h-10 text-yellow-500'/>
      </div>
    </div>
    </nav>
  )
}

export default SideBar

interface SideBarLinkPropsTypes {
  text : string,
  Icon : React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string;
    titleId?: string;
} & React.RefAttributes<SVGSVGElement>>
}

const SideBarLinks = ({ Icon, text}: SideBarLinkPropsTypes) => {
  return <li className='flex items-center text-xl mb-1.5 space-x-3 p-3'>
    <Icon className='h-7'/>
    <span className='hidden xl:block'>
     {text} 
    </span>
  </li>
}