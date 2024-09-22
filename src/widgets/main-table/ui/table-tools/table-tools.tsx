import { Button } from "@/shared";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ChevronDown, X } from "lucide-react";

export function TableTools() {
  return (
    <div className="flex items-center flex-wrap justify-between gap-4 mb-4">
      <div className="flex items-center md:w-[16rem] w-full relative">
        <div className="inline-flex w-[calc(100%-1.75rem)] rounded-xl z-10 items-center justify-between whitespace-nowrap  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 p-2 rounded-r-none">
          <span className="font-normal">Sick</span>
          <button type="button" className="">
            <X className="w-4 h-4"/>
          </button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className='rounded-xl border-l-0 pr-1 pl-[calc(100%-1.5rem)] bg-blue absolute inset-0'>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" sideOffset={4} align="end" className="p-4 rounded-xl bg-white z-20">
            <DropdownMenuItem className="outline-none p-1 rounded-md hover:bg-blue">All</DropdownMenuItem>
            <DropdownMenuItem data-state='selected' className="outline-none p-1 rounded-md hover:bg-blue">Healthy</DropdownMenuItem>
            <DropdownMenuItem className="outline-none p-1 rounded-md hover:bg-blue">Sick</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex justify-end md:flex-grow mr-2 md:mr-0">
        <div className="flex items-center w-[7rem] md:w-[6rem] relative">
          <div className="inline-flex w-[calc(100%-1.75rem)] rounded-xl z-10 items-center justify-between whitespace-nowrap  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 p-2 rounded-r-none">
            <span className="font-normal">All</span>
            <button type="button" className="">
              <X className="w-4 h-4"/>
            </button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className='rounded-xl border-l-0 pr-1 pl-[calc(100%-1.5rem)] bg-blue absolute inset-0'>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" sideOffset={4} align="end" className="p-4 rounded-xl bg-white z-20">
              <DropdownMenuItem className="outline-none p-1 rounded-md hover:bg-blue">All</DropdownMenuItem>
              <DropdownMenuItem data-state='selected' className="outline-none p-1 rounded-md hover:bg-blue">Healthy</DropdownMenuItem>
              <DropdownMenuItem className="outline-none p-1 rounded-md hover:bg-blue">Sick</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex items-center w-[11rem] flex-grow md:flex-grow-0 relative">
        <div className="inline-flex w-[calc(100%-1.75rem)] rounded-xl z-10 items-center justify-between whitespace-nowrap  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 p-2 rounded-r-none">
          <span className="font-normal">Balance History</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className='rounded-xl border-l-0 pr-1 pl-[calc(100%-1.5rem)] bg-blue absolute inset-0'>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" sideOffset={4} align="end" className="p-4 rounded-xl bg-white z-20">
            <DropdownMenuItem className="outline-none p-1 rounded-md hover:bg-blue">All</DropdownMenuItem>
            <DropdownMenuItem data-state='selected' className="outline-none p-1 rounded-md hover:bg-blue">Healthy</DropdownMenuItem>
            <DropdownMenuItem className="outline-none p-1 rounded-md hover:bg-blue">Sick</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}