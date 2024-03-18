"use client"

import * as React from "react"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import DeleteEntryDialogue from "../DeleteEntryDialogue"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Job_Entry = {
  uid: string
  modified: string
  company_name: string
  job_title: string
  location: string
  DDL: string
  keywords: string
}

export const columns: ColumnDef<Job_Entry>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  { accessorKey: "uid", header: "UID" },
  {
    accessorKey: "modified",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Modified
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return (
        <div>{row.getValue("modified")}</div>
      )
    }
  },
  {
    accessorKey: "company_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-right"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Company
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "job_title",
    header: "Job Title",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "DDL",
    header: "DDL",
  },
  {
    accessorKey: "keywords",
    header: "Keywords",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original // access row data

      const [isOpen, setIsOpen] = React.useState(false)
      return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger >
            <Button onClick={()=> setIsOpen(!isOpen)} variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#FFFFFF]" align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.uid)}
            >
              Copy  UID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Detail</DropdownMenuItem>
            <DeleteEntryDialogue uid={row.original.uid} closeMenu={setIsOpen}/>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }
]

