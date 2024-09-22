"use client"

import { useAppStore } from '@/app/store';
import Image from 'next/image';
import { Tabs, TabsProps } from './ui';
import { Button } from '@/shared';
import { ChevronDown, Settings } from 'lucide-react';

export function MainTopProfile({activeIndex, setActiveIndex}: TabsProps) {
  const profile = useAppStore(state => state.profile);
  return (
    <div className="py-6 md:pt-[34px] md:pb-0 relative after:absolute after:inset-0 after:bg-blue after:z-10 overflow-hidden">
      <div className="container">
        <div className="max-w-[1300px] mx-auto grid grid-cols-[225px_calc(100%-250px)] gap-6">
          <div className="h-[60px] w-[60px] md:h-[150px] md:w-[150px] z-30 relative justify-self-center overflow-hidden">
            {!!profile?.avatar && <Image src={profile?.avatar} alt={profile?.name} width={150} height={150} className="object-contain rounded-full w-full h-full block" />}
          </div>

          <div className="flex flex-col relative z-20">
            <div className="flex justify-between">
              <h1 className="text-[28px] font-semibold">{profile?.name}</h1>
              <div className="flex items-center gap-4">
                <Button
                  variant={'outline'}
                  className='bg-blue h-8 text-sm border-[#7C96B1] rounded-xl inline-flex items-center gap-2 p-2'
                  type='button'
                >
                  <span>Request a Change</span>
                  <ChevronDown className='w-4 h-4' />
                </Button>
                <Button
                  variant={'outline'}
                  className='bg-blue h-8 text-sm border-[#7C96B1] rounded-xl inline-flex items-center gap-2 p-2'
                  type='button'
                >
                  <Settings className='w-4 h-4' />
                  <ChevronDown className='w-4 h-4' />
                </Button>
              </div>
            </div>
            <Tabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          </div>
        </div>
      </div>
    </div>
  )
}