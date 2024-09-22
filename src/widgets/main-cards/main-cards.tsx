import { Cross, FileClock, MountainSnow } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

export function MainCards() {
  return (
    <div className="mx-auto max-w-[55.5rem] mb-6">
      <Swiper
        slidesPerView="auto"
        freeMode={true}
        watchSlidesProgress={true}
        className="[&.swiper]:-mr-4 [&.swiper]:md:-mr-12 [&.swiper]:overflow-visible"
        onClick={swiper => swiper.slideTo(swiper.clickedIndex, 300)}
      >
        <SwiperSlide className="pr-4 lg:pr-12 max-w-[calc(100%/3)] min-w-[16.5rem]">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full items-center justify-center gap-1 min-h-[8.625rem] bg-[#F0F3F8] rounded-lg mb-2">
              <p className="font-semibold text-xl">Sick</p>
              <p className="flex items-center gap-[.625rem] text-[1.875rem] text-[#1C3144] font-semibold">
                <Cross className="w-[1.875rem] h-[1.875rem]" />
                <span>3</span>
              </p>
              <p className="font-semibold">Days Available</p>
              <p className="font-semibold text-[#7C96B1]">1 dey scheduled</p>
            </div>
            <p className="text-[#7C96B1]">Sick Full-Time</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="pr-4 lg:pr-12 max-w-[calc(100%/3)] min-w-[16.5rem]">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full items-center justify-center gap-1 min-h-[8.625rem] bg-[#F0F3F8] rounded-lg mb-2">
              <p className="font-semibold text-xl">Annual Leave </p>
              <p className="flex items-center gap-[.625rem] text-[1.875rem] text-[#1C3144] font-semibold">
                <MountainSnow className="w-[1.875rem] h-[1.875rem]" />
                <span>10.3</span>
              </p>
              <p className="font-semibold">Days Available</p>
            </div>
            <p className="text-[#7C96B1]">Holiday Full-Time</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="pr-4 lg:pr-12 max-w-[calc(100%/3)] min-w-[16.5rem]">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full items-center justify-center gap-1 min-h-[8.625rem] bg-[#F0F3F8] rounded-lg mb-2">
              <p className="font-semibold text-xl">Comp/in Lieu Time</p>
              <p className="flex items-center gap-[.625rem] text-[1.875rem] text-[#1C3144] font-semibold">
                <FileClock className="w-[1.875rem] h-[1.875rem]" />
                <span>0</span>
              </p>
              <p className="font-semibold">Human Used(YTD)</p>
            </div>
            <p className="text-[#7C96B1]">Comp/in Lieu Time Flexible Policy</p>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}