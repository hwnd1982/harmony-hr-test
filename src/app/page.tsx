"use client"

import {
  FileClock,
  MoveDown,
  MoveUp,
  X,
} from "lucide-react"

import {
  Button,
  Card,
  CardContent,
  History,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared"
import { Aside, Header, MainTopProfile } from "@/widgets"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from 'lucide-react';

export default function Dashboard() {
  const [activeTabLink, setActiveTabLink] = useState(2);
  const [sortByDateDirection, setSortByDateDirection] = useState(1);
  const [selectedRow, setSelectedRow] = useState(3);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-1 flex-col pb-32">
        <MainTopProfile activeIndex={activeTabLink} setActiveIndex={setActiveTabLink} />

        <div className="md: -mt-3.5">
          <div className="container">
            <div className="max-w-[1300px] mx-auto grid grid-cols-[225px_1fr] gap-6">
              <Aside />
              <Card className="relative z-0 self-start">                
                <CardContent className="px-4 pt-[55px]">

                  <div className="flex items-center justify-between pb-4 border-b-2 border-[#7C96B1] mb-6">
                    <h2 className="flex items-center gap-3">
                      <FileClock className="w-4 h-4"/>
                      <span className="text-[#204973] text-xl font-medium">Time Off</span>
                    </h2>
                    <div className="flex items-center gap-[30px]">
                      <p className="[&>span]:text-[#3758AB]">
                        Accrual Level Start Date <span>03/09-2020</span>
                      </p>
                      <Button variant={'outline'} className="p-2 h-8 rounded-xl border-black">Add Time Off Policy</Button>
                    </div>
                  </div>

                  <p className="flex items-center gap-2 text-sm font-medium mb-4">
                    <History className="h-4 w-4"/>
                    <span className="text-[#204973]">History</span>
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center w-[256px] relative">
                        <div className="inline-flex w-[calc(100%-28px)] rounded-xl z-10 items-center justify-between whitespace-nowrap  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 p-2 rounded-r-none">
                          <span className="font-normal">Sick</span>
                          <button type="button" className="">
                            <X className="w-4 h-4"/>
                          </button>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" className='rounded-xl border-l-0 pr-1 pl-[calc(100%-24px)] bg-blue absolute inset-0'>
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

                      <div className="flex items-center w-[96px] relative">
                        <div className="inline-flex w-[calc(100%-28px)] rounded-xl z-10 items-center justify-between whitespace-nowrap  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 p-2 rounded-r-none">
                          <span className="font-normal">All</span>
                          <button type="button" className="">
                            <X className="w-4 h-4"/>
                          </button>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" className='rounded-xl border-l-0 pr-1 pl-[calc(100%-24px)] bg-blue absolute inset-0'>
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

                    <div className="flex items-center w-[176px] relative">
                      <div className="inline-flex w-[calc(100%-28px)] rounded-xl z-10 items-center justify-between whitespace-nowrap  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 p-2 rounded-r-none">
                        <span className="font-normal">Balance History</span>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className='rounded-xl border-l-0 pr-1 pl-[calc(100%-24px)] bg-blue absolute inset-0'>
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
                  <Table>
                    <TableHeader className="">
                      <TableRow className="bg-blue">
                        <TableHead>
                          <button 
                            type="button"
                            onClick={() => setSortByDateDirection(sortByDateDirection * -1)}
                            className="flex items-center gap-1"
                          >
                            <span>Date</span>
                            {sortByDateDirection > 0 ?
                              <MoveDown /> :
                              <MoveUp /> 
                            }
                          </button>
                        </TableHead>
                        <TableHead className="">
                          Description
                        </TableHead>
                        <TableHead className="">
                          Used Days (-)
                        </TableHead>
                        <TableHead className="">
                          Earned Days (+)
                        </TableHead>
                        <TableHead className="text-right">Balance</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="before:block before:w-full before:pt-4">
                      {[
                        {
                          id: 1,
                          date: '21/05/2024',
                          description: 'Accrual for 21/05/2024 to 20/11/2024',
                          used: '',
                          earned: '3.00',
                          balance:'3.00',
                        },
                        {
                          id: 2,
                          date: '23/05/2024',
                          description: 'Accrual for 23/05/2024 to 20/11/2024',
                          used: '-6',
                          earned: '3.00',
                          balance:'3.00',
                        },
                        {
                          id: 3,
                          date: '22/05/2024',
                          description: 'Accrual for 22/05/2024 to 20/11/2024',
                          used: '-6',
                          earned: '3.00',
                          balance:'3.00',
                        },
                        {
                          id: 4,
                          date: '24/05/2024',
                          description: 'Accrual for 24/05/2024 to 20/11/2024',
                          used: '',
                          earned: '3.00',
                          balance:'3.00',
                        },
                        {
                          id: 5,
                          date: '26/05/2024',
                          description: 'Accrual for 26/05/2024 to 20/11/2024',
                          used: '-6',
                          earned: '3.00',
                          balance:'3.00',
                        },
                        {
                          id: 6,
                          date: '01/06/2024',
                          description: 'Accrual for 01/06/2024 to 20/11/2024',
                          used: '',
                          earned: '3.00',
                          balance:'3.00',
                        },
                      ].sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime() ? 1 * sortByDateDirection : -1 * sortByDateDirection).map(({id, date, description, used, earned, balance}) => (
                        <TableRow
                          key={`table-row-${id}`}
                          data-state={selectedRow === id && "selected"}
                          onClick={() => setSelectedRow(id)}
                        >
                          <TableCell className="text-sm font-medium">{date}</TableCell>
                          <TableCell className="text-sm font-medium">{description}</TableCell>
                          <TableCell className="text-sm font-medium">{used}</TableCell>
                          <TableCell className="text-sm font-medium">{earned}</TableCell>
                          <TableCell className="text-sm font-medium text-right">{balance}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

