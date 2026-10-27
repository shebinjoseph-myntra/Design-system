import * as React from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "../registry/new-york-v4/ui/button"
import { Calendar } from "../registry/new-york-v4/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../registry/new-york-v4/ui/popover"

function DatePicker() {
  const [date, setDate] = React.useState<Date | undefined>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[240px] justify-start">
          {date ? date.toLocaleDateString() : "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  )
}

const meta = {
  title: "Shadcn/Components/Date Picker",
  component: DatePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
