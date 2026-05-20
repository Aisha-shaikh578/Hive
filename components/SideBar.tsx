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
    <nav className='hidden sm:flex flex-col sticky top-0 p-3 h-screen xl:ml-20 mr-10'>
    <div className='h-full relative flex flex-col items-center'>
      <div className='py-3'>
        <Image src={HiveLogo} alt='logo' width={58} height={48} className='rounded-3xl'/>
      </div>

      <div>
        <ul>
          <SideBarLinks Icon={HomeIcon} text='Home'/>
          <SideBarLinks Icon={HashtagIcon} text='Explore'/>
          <SideBarLinks Icon={BellIcon} text='Notifications'/>
          <SideBarLinks Icon={InboxIcon} text='Messages'/>
          <SideBarLinks Icon={BookmarkIcon} text='Save'/>
          <SideBarLinks Icon={UserIcon} text='Profile'/>
          <SideBarLinks Icon={EllipsisHorizontalCircleIcon} text='More'/>
        </ul>
      </div>

      <div 
      className='absolute bottom-3 cursor-pointer flex space-x-2 hover:bg-gray-500 hover:bg-opacity-10 transition xl:p-3 xl:pe-6 rounded-full'>
        <Image 
        src={'/assets/user.png'}
        alt='profile picture'
        height={34}
        width={34}
        className='h-8 w-8'
        />

        <div className='hidden xl:flex flex-col text-sm'>
          <span className='font-bold'>Guest</span>
          <span className='text-gray-500'>@test123</span>
        </div>
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