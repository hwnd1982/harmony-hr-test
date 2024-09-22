import { History } from "@/shared";
import { TableBlock, TableTools } from "./ui";

export function MainTable() {
  return (
    <>
      <p className="flex items-center gap-2 text-sm font-medium mb-4">
        <History className="h-4 w-4"/>
        <span className="text-[#204973]">History</span>
      </p>
      <TableTools />
      <TableBlock />
    </>
  )
}