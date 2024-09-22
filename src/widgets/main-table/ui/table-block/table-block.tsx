"use client";

import { ScrollArea, ScrollBar, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/shared'
import { MoveDown, MoveUp } from 'lucide-react'
import { useState } from 'react';

export function TableBlock() {
  const [sortByDateDirection, setSortByDateDirection] = useState(1);
  const [selectedRow, setSelectedRow] = useState(3);

  return (
    <ScrollArea className="pb-4 -mb-4" >
      <Table className="min-w-[48rem]">
        <TableHeader>
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
              date: "21/05/2024",
              description: "Accrual for 21/05/2024 to 20/11/2024",
              used: "",
              earned: "3.00",
              balance: "3.00",
            },
            {
              id: 2,
              date: "23/05/2024",
              description: "Accrual for 23/05/2024 to 20/11/2024",
              used: "-6",
              earned: "3.00",
              balance: "3.00",
            },
            {
              id: 3,
              date: "22/05/2024",
              description: "Accrual for 22/05/2024 to 20/11/2024",
              used: "-6",
              earned: "3.00",
              balance: "3.00",
            },
            {
              id: 4,
              date: "24/05/2024",
              description: "Accrual for 24/05/2024 to 20/11/2024",
              used: "",
              earned: "3.00",
              balance: "3.00",
            },
            {
              id: 5,
              date: "26/05/2024",
              description: "Accrual for 26/05/2024 to 20/11/2024",
              used: "-6",
              earned: "3.00",
              balance: "3.00",
            },
            {
              id: 6,
              date: "01/06/2024",
              description: "Accrual for 01/06/2024 to 20/11/2024",
              used: "",
              earned: "3.00",
              balance: "3.00",
            },
          ].sort((a, b) => (new Date(a.date).getTime() > new Date(b.date).getTime() ? 1 * sortByDateDirection : -1 * sortByDateDirection)).map(({id, date, description, used, earned, balance}) => (
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
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}