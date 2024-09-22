import { Button } from "@/shared";
import { FileClock } from "lucide-react";

export function MainHeader() {
  return (
    <div className="flex justify-between pb-4 border-b-2 border-[#7C96B1] mb-6">
      <h2 className="hidden md:flex items-center gap-3">
        <FileClock className="w-4 h-4"/>
        <span className="text-[#204973] text-xl font-medium">Time Off</span>
      </h2>
      <div className="flex flex-col items-end w-full md:w-auto md:items-center md:flex-row gap-2 md:gap-[1.875rem]">
        <p className="[&>span]:text-[#3758AB]">
          Accrual Level Start Date <span>03/09-2020</span>
        </p>
        <Button variant={'outline'} className="p-2 h-8 rounded-xl border-black">Add Time Off Policy</Button>
      </div>
    </div>
  )
}