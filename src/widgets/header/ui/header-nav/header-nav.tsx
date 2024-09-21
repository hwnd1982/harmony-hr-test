'use client';

import { SheetClose } from "@/shared";
import { cn } from "@/shared/lib";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type HeaderNavProps = {
  links: {
    title: string
    href: string
  }[]
  activeIndex: number
  setActive: Dispatch<SetStateAction<number>>
  keyPrefix: string
  className: string
  classItem: string
  classActive: string
  sheetClose?: boolean
}

type HeaderNavLinkProps ={
  title: string
  href: string
  index: number
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
  className: string
  
  classActive: string
}

export const HeaderNavLink = ({href, title, index, activeIndex, className, classActive, setActiveIndex}: HeaderNavLinkProps) => (
  <Link
    href={href}
    onClick={() => setActiveIndex(index)}
    className={cn(className, activeIndex === index && classActive)}
  >{title}</Link>
)

export const SheelNavLink = ({href, title, index, activeIndex, className, classActive, setActiveIndex}: HeaderNavLinkProps) => (
  <SheetClose asChild>
    <Link
      href={href}
      onClick={() => setActiveIndex(index)}
      className={cn(className, activeIndex === index && classActive)}
    >{title}</Link>
  </SheetClose>
)

export const HeaderNav = ({ links, activeIndex, setActive, keyPrefix, className, classItem, classActive, sheetClose=false }: HeaderNavProps) => {
  return (
    <nav className={className}>
      {
        links.map(({title, href}, index) => {
          const props = {
            href,
            title,
            index,
            activeIndex,
            className: classItem,
            classActive,
            setActiveIndex: setActive,
          }

          return sheetClose ? 
            <SheelNavLink  {...props} key={`${keyPrefix}-${index}`} /> :
            <HeaderNavLink {...props} key={`${keyPrefix}-${index}`} />
        })
      }
    </nav>
  )
}