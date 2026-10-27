import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { InboxIcon } from "lucide-react"
import { ItemMedia } from "../registry/new-york-v4/ui/item"

import { Button } from "../registry/new-york-v4/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "../registry/new-york-v4/ui/item"

const meta = {
  title: "Shadcn/Components/Item",
  component: Item,
  tags: ["autodocs"],
  args: { variant: "outline" },
  render: (args) => (
    <Item {...args} className="max-w-md">
      <ItemContent>
        <ItemTitle>Basic Item</ItemTitle>
        <ItemDescription>
          A simple item with title and description.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          Action
        </Button>
      </ItemActions>
    </Item>
  ),
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllVariants: Story = {
  render: () => (
    <div className="flex w-full max-w-md flex-col gap-3">
      {(["default", "outline", "muted"] as const).map((variant) => (
        <Item key={variant} variant={variant}>
          <ItemMedia variant="icon">
            <InboxIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{variant}</ItemTitle>
            <ItemDescription>Item {variant} variant.</ItemDescription>
          </ItemContent>
        </Item>
      ))}
    </div>
  ),
}
