import * as React from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "../registry/new-york-v4/ui/button"
import { Checkbox } from "../registry/new-york-v4/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../registry/new-york-v4/ui/table"

const payments = [
  { id: "m5gr84i9", status: "success", email: "ken99@example.com", amount: 316 },
  { id: "3u1reuv4", status: "success", email: "abe45@example.com", amount: 242 },
  { id: "derv1ws0", status: "processing", email: "monserrat44@example.com", amount: 837 },
  { id: "5kma53ae", status: "success", email: "silas22@example.com", amount: 874 },
  { id: "bhqecj4p", status: "failed", email: "carmella@example.com", amount: 721 },
]

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

function DataTable() {
  const [selected, setSelected] = React.useState<Set<string>>(new Set())
  const [ascending, setAscending] = React.useState(true)

  const rows = [...payments].sort((a, b) =>
    ascending ? a.amount - b.amount : b.amount - a.amount
  )
  const allSelected = selected.size === rows.length

  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  return (
    <div className="w-full max-w-2xl space-y-2">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-10">
                <Checkbox
                  aria-label="Select all"
                  checked={allSelected}
                  onCheckedChange={(value) =>
                    setSelected(
                      value ? new Set(rows.map((r) => r.id)) : new Set()
                    )
                  }
                />
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-right">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setAscending((v) => !v)}
                >
                  Amount {ascending ? "↑" : "↓"}
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((payment) => (
              <TableRow
                key={payment.id}
                data-state={selected.has(payment.id) ? "selected" : undefined}
                onClick={() => toggle(payment.id)}
                className="cursor-pointer"
              >
                <TableCell>
                  <Checkbox
                    aria-label={`Select ${payment.email}`}
                    checked={selected.has(payment.id)}
                    onClick={(event) => event.stopPropagation()}
                    onCheckedChange={() => toggle(payment.id)}
                  />
                </TableCell>
                <TableCell className="capitalize">{payment.status}</TableCell>
                <TableCell>{payment.email}</TableCell>
                <TableCell className="text-right">
                  {currency.format(payment.amount)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="text-sm text-muted-foreground">
        {selected.size} of {rows.length} row(s) selected.
      </p>
    </div>
  )
}

const meta = {
  title: "Shadcn/Components/Data Table",
  component: DataTable,
  tags: ["autodocs"],
} satisfies Meta<typeof DataTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
