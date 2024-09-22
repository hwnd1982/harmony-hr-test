import { Clock, Cross, PiggyBank } from "lucide-react";

export function MainInfo() {
  return (
    <>
      <div className="flex justify-between pb-4 border-b-2 border-[#7C96B1] mb-6">
        <h2 className="hidden md:flex items-center gap-2">
          <Clock className="w-4 h-4"/>
          <span className="text-[#204973]">Upcoming Time Off</span>
        </h2>
      </div>

      <div className="flex items-center gap-[.875rem] pb-4 border-b-2 border-[#7C96B1] mb-6">
        <Cross className="w-[1.875rem] h-[1.875rem]"/>
        <p className="flex flex-col gap-1">
          <span className="">Jan 27</span>
          <span className="flex items-center before:w-2 before:h-2 before:rounded-full before:bg-[#1C3144] before:mr-1">1 day of Sick</span>
        </p>
      </div>

      <div className="flex items-center gap-[.875rem] pb-4 border-b-2 border-[#7C96B1] mb-6">
        <PiggyBank className="w-[1.875rem] h-[1.875rem]"/>
        <p className="flex flex-col gap-1">
          <span className="">Jul 4</span>
          <span className="">Independence Day</span>
        </p>
      </div>
    </>
  )
}