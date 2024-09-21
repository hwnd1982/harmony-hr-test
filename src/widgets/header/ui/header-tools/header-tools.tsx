import { Button } from "@/shared";
import { cn } from "@/shared/lib";
import { Bell, CircleHelp, Settings } from "lucide-react";

export function HeaderTools({className}: {className?: string}) {
  return (
    <>
      <Button
          variant="ghost"
          size="icon"
          className={cn('shrink-0 rounded-full', className)}
        >
        <Settings className="h-6 w-6" />
      </Button>
      <Button
          variant="ghost"
          size="icon"
          className={cn('shrink-0 rounded-full', className)}
        >
        <CircleHelp className="h-6 w-6" />
      </Button>
      <Button
          variant="ghost"
          size="icon"
          className={cn('shrink-0 rounded-full', className)}
        >
        <Bell className="h-6 w-6" />
      </Button>
    </>
  )
}