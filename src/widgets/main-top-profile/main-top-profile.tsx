"use client"

import { useAppStore } from '@/app/store';
import Image from 'next/image';
import { Tabs, TabsProps } from './ui';

export function MainTopProfile({activeIndex, setActiveIndex}: TabsProps) {
  const profile = useAppStore(state => state.profile);
  return (
    <div className="py-6 md:pt-[34px] md:pb-0 relative after:absolute after:inset-0 after:bg-blue after:z-10">
      <div className="container">
        <div className="max-w-[1300px] mx-auto grid grid-cols-[225px_1fr] gap-6">
          <div className="h-[60px] w-[60px] md:h-[150px] md:w-[150px] z-30 relative justify-self-center overflow-hidden">
            {!!profile?.avatar && <Image src={profile?.avatar} alt={profile?.name} width={150} height={150} className="object-contain rounded-full w-full h-full block" />}
          </div>

          <div className="flex flex-col relative z-20">
            <h1 className="text-[28px] font-semibold">{profile?.name}</h1>
            <Tabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          </div>
        </div>
      </div>
    </div>
  )
}