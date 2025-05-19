"use client"

import { useState } from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Mock data - in a real app, this would come from your backend
const data = [
  {
    id: "1",
    user: "alex.smith@example.com",
    rating: 5,
    category: "General",
    feedback:
      "The mood tracking feature has been incredibly helpful for me to identify patterns in my mental wellbeing.",
    date: "2024-05-17T14:30:00",
    status: "New",
  },
  {
    id: "2",
    user: "jordan.lee@example.com",
    rating: 4,
    category: "Resources",
    feedback:
      "I appreciate the resources section, but would love to see more content specific to managing remote work anxiety.",
    date: "2024-05-16T09:15:00",
    status: "Reviewed",
  },
  {
    id: "3",
    user: "taylor.wong@example.com",
    rating: 5,
    category: "Interface",
    feedback: "The interface is intuitive and calming. Makes me want to use the app daily.",
    date: "2024-05-15T16:45:00",
    status: "Actioned",
  },
  {
    id: "4",
    user: "sam.johnson@example.com",
    rating: 3,
    category: "Support",
    feedback:
      "The support resources are good, but I had trouble connecting with a therapist. The wait time was longer than expected.",
    date: "2024-05-14T11:20:00",
    status: "Reviewed",
  },
  {
    id: "5",
    user: "jamie.garcia@example.com",
    rating: 4,
    category: "Analytics",
    feedback:
      "I love the analytics section, but would like more detailed insights about how my mood correlates with work hours.",
    date: "2024-05-13T15:10:00",
    status: "New",
  },
  {
    id: "6",
    user: "casey.patel@example.com",
    rating: 2,
    category: "Mobile App",
    feedback: "The mobile app crashes frequently when I try to log my mood. Please fix this issue.",
    date: "2024-05-12T10:05:00",
    status: "Urgent",
  },
  {
    id: "7",
    user: "riley.kim@example.com",
    rating: 5,
    category: "General",
    feedback: "This platform has been a game-changer for my mental health as a remote worker. Thank you!",
    date: "2024-05-11T13:40:00",
    status: "Reviewed",
  },
  {
    id: "8",
    user: "morgan.chen@example.com",
    rating: 4,
    category: "Resources",
    feedback:
      "The meditation resources are excellent. I'd love to see more content on managing work relationships remotely.",
    date: "2024-05-10T09:30:00",
    status: "Actioned",
  },
  {
    id: "9",
    user: "drew.nguyen@example.com",
    rating: 3,
    category: "Interface",
    feedback: "The dark mode is great, but some text is hard to read. Could use better contrast in some areas.",
    date: "2024-05-09T14:15:00",
    status: "New",
  },
  {
    id: "10",
    user: "avery.williams@example.com",
    rating: 5,
    category: "Support",
    feedback: "The group sessions have been incredibly helpful. I feel less alone in my struggles as a remote worker.",
    date: "2024-05-08T16:20:00",
    status: "Reviewed",
  },
]

const columns: ColumnDef<(typeof data)[0]>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
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
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => <div className="font-medium">{row.getValue("user")}</div>,
  },
  {
    accessorKey: "rating",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Rating
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const rating = Number.parseInt(row.getValue("rating"))
      return (
        <div className="flex items-center">
          <span className="font-medium">{rating}/5</span>
        </div>
      )
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => <div>{row.getValue("category")}</div>,
  },
  {
    accessorKey: "feedback",
    header: "Feedback",
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate" title={row.getValue("feedback")}>
        {row.getValue("feedback")}
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"))
      return <div>{date.toLocaleDateString()}</div>
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Badge
          variant={
            status === "New"
              ? "default"
              : status === "Urgent"
                ? "destructive"
                : status === "Reviewed"
                  ? "secondary"
                  : "outline"
          }
        >
          {status}
        </Badge>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const feedback = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(feedback.id)}>Copy ID</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Mark as Reviewed</DropdownMenuItem>
            <DropdownMenuItem>Mark as Actioned</DropdownMenuItem>
            <DropdownMenuItem>Add to Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function AdminFeedbackTable() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter by user email..."
          value={(table.getColumn("user")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("user")?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s)
          selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
