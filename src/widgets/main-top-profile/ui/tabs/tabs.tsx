import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link';
import { cn } from '@/shared/lib';

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
  {title: 'More'},
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
        className="w-full -mr-4"
      >
        {list.map(({title}, index) => (
          <SwiperSlide
            key={`tabs-trigger-${index}`}
            className={cn('max-w-max pr-4')}
            onClick={() => {setActiveIndex(index)}}
          >
            <Link href="#" className={cn('flex text-sm font-medium justify-center py-4 w-[90px] transition bg-blue rounded-t-lg', activeIndex === index && "bg-white")}>{title}</Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}