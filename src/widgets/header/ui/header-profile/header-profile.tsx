'use client';

import { 
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem 
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/shared/ui";
import { logout } from "@/app/actions";
import { useAppStore } from "@/app/store";
import Image from "next/image";

export function HeaderProfile() {
  const profile = useAppStore(state => state.profile);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full w-[38px] h-[38px] overflow-hidden">
          {!!profile?.avatar && <Image src={profile?.avatar} alt={profile?.name} width={38} height={38} className="h-full w-full object-contain block" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2" align="end">
        <DropdownMenuLabel className="px-2 py-1.5 text-sm font-semibold">{profile?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator className="-mx-1 my-1 h-px bg-muted" />
        <DropdownMenuItem className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" onClick={() => logout()}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
