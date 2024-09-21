'use client'

import Link from "next/link";
import {
  Menu,
  Search,
} from "lucide-react";
import {
  Button,
  Input,
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/shared"
import { HeaderNav, HeaderProfile, HeaderTools } from "./ui"
import { useState } from "react";

const links = [
  {title: "Home", href: "#"},
  {title: "My Info", href: "#"},
  {title: "People", href: "#"},
  {title: "Hiring", href: "#"},
  {title: "Reports", href: "#"},
  {title: "Files", href: "#"},
];

export function Header() {
  const [activeNavLink, setActiveNavLink] = useState(1);

  return (
    <header className="sticky bg-white z-50 top-0">
      <div className="container items-center flex justify-between lg:pt-8 lg:pb-0 lg:items-start gap-4 bg-background p-4 md:px-6">
        <Link
          href="/"
          className="text-xl font-semibold transition-colors hover:text-foreground"
        >
          HarmonyHR
        </Link>
        <HeaderNav 
          links={links}
          activeIndex={activeNavLink}
          setActive={setActiveNavLink}
          keyPrefix="header-nav-link"
          className="hidden flex-col flex-shrink-0 text-lg font-medium lg:flex md:flex-row md:items-center md:text-sm"
          classItem="text-muted-foreground transition-colors hover:text-foreground flex-shrink-0 md:p-4 md:rounded-t-lg"
          classActive="bg-blue"
        />

        <div className="flex items-center gap-4 w-full md:max-w-[400px] md:gap-2 lg:gap-4">
          <form className="w-full flex-1 sm:flex-initial">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search"
                className="pl-8 w-full"
              />
            </div>
          </form>
        </div>

        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="shrink-0 md:inline-flex rounded-full lg:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex gap-2 mb-6">
                <HeaderTools />
              </div>
              <HeaderNav 
                links={links}
                keyPrefix="header-mobile-link"
                activeIndex={activeNavLink}
                setActive={setActiveNavLink}
                className="grid gap-6 text-lg font-medium"
                classItem="text-muted-foreground hover:text-foreground"
                classActive="text-black"
                sheetClose={true}
              />
            </SheetContent>
          </Sheet>
          <HeaderTools className="lg:inline-flex hidden" />
          <HeaderProfile />
        </div>
      </div>
    </header>
  )
}
