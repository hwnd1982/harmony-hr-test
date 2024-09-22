"use client"

import {
  Card,
  CardContent,
} from "@/shared"
import { Aside, Header, MainTable, MainTopProfile, MainInfo, MainHeader, MainCards } from "@/widgets"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-1 flex-col pb-32">
        <MainTopProfile />
        <div className="md: -mt-3.5">
          <div className="container pl-0 pr-0 md:pl-4 md:pr-4">
            <div className="max-w-[81.25rem] mx-auto grid md:grid-cols-[14rem_1fr] gap-6 overflow-hidden w-full">
              <Aside />
              <Card className="relative z-0 self-start overflow-hidden w-full">                
                <CardContent className="px-4 pt-[3.5rem]">
                  <MainHeader />
                  <MainCards />
                  <MainInfo />
                  <MainTable />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
