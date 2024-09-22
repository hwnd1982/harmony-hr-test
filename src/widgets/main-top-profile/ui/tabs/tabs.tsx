'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link';
import { cn } from '@/shared/lib';
import { ChevronDown } from 'lucide-react';

const list = [
  {title: 'Personal'},
  {title: 'Job'},
  {title: 'Time Off'},
  {title: 'Emergency'},
  {title: 'Documents'},
  {title: 'Notes'},
  {title: 'Benefits'},
  {title: 'Training'},
  {title: 'Assets'},
];

export type TabsProps = {
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
}

export function Tabs({activeIndex, setActiveIndex}: TabsProps) {
  return (
    <div className="flex flex-col flex-grow justify-end">
      <Swiper
        slidesPerView="auto"
        freeMode={true}
        watchSlidesProgress={true}
        className="w-full -mr-4 [&.swiper]:overflow-visible"
        onClick={swiper => swiper.slideTo(swiper.clickedIndex, 300)}
      >
        {list.map(({title}, index) => (
          <SwiperSlide
            key={`tabs-trigger-${index}`}
            className={cn('max-w-max pr-4 [&.swiper]overflow-visible')}
            onClick={() => {setActiveIndex(index)}}
          >
            <Link href="#" className={cn('flex text-sm font-medium justify-center py-4 w-[90px] transition bg-blue rounded-t-lg', activeIndex === index && "bg-white")}>{title}</Link>
          </SwiperSlide>
        ))}
        <SwiperSlide
          className="[&.swiper-slide]:w-auto flex-grow"
          onClick={() => {setActiveIndex(9)}}
          >
            <Link href="#" className={cn('flex w-full text-sm font-medium items-center justify-between px-4 py-4 transition bg-blue rounded-t-lg', activeIndex === 9 && "bg-white")}>
              <span>More</span>
              <ChevronDown className='w-4 h-4' />
              </Link>
          </SwiperSlide>
      </Swiper>
    </div>
  )
}