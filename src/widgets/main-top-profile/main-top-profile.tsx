"use client"

import { useAppStore } from '@/app/store';
import Image from 'next/image';
import { Tabs } from './ui';
import { Button } from '@/shared';
import { ChevronDown, EllipsisVertical, Settings } from 'lucide-react';
import { useState } from 'react';

export function MainTopProfile() {
  const profile = useAppStore(state => state.profile);
  const [activeTabLink, setActiveTabLink] = useState(2);
  
  return (
    <div className="pt-6 md:pt-[2.125rem] pb-0 relative after:absolute after:inset-0 after:bg-blue after:z-10 overflow-hidden">
      <div className="container">
        <div className="max-w-[81.25rem] mx-auto grid md:grid-cols-[14rem_calc(100%-15.625rem)] gap-6 relative">
          <div className="absolute md:relative  top-0 left-0 h-[3.75rem] w-[3.75rem] md:h-[9.375rem] md:w-[9.375rem] z-30 justify-self-center overflow-hidden">
            {!!profile?.avatar && <Image src={profile?.avatar} alt={profile?.name} width={180} height={180} className="object-contain rounded-full w-full h-full block" />}
          </div>

          <div className="flex flex-col relative z-20 gap-9 md:gap-0">
            <div className="flex justify-between pl-[5.125rem]">
              <h1 className="text-[1.75rem] font-semibold">{profile?.name}</h1>
              <div className="flex items-center gap-4">
                <Button
                  variant={'outline'}
                  className='hidden md:inline-flex bg-blue h-8 text-sm border-[#7C96B1] rounded-xl items-center gap-2 p-2'
                  type='button'
                >
                  <span>Request a Change</span>
                  <ChevronDown className='w-4 h-4' />
                </Button>
                <Button
                  variant={'outline'}
                  className='bg-blue h-8 text-sm border-[#7C96B1] rounded-xl hidden md:inline-flex items-center gap-2 p-2'
                  type='button'
                >
                  <Settings className='w-4 h-4' />
                  <ChevronDown className='w-4 h-4' />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={'shrink-0 rounded-full'}
                >
                  <EllipsisVertical className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <Tabs activeIndex={activeTabLink} setActiveIndex={setActiveTabLink} />
          </div>
        </div>
      </div>
    </div>
  )
}