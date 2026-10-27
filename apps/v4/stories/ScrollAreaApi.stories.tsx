import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { ScrollArea } from "../registry/new-york-v4/ui/scroll-area"
import { Separator } from "../registry/new-york-v4/ui/separator"

const tags = Array.from({ length: 30 }).map((_, i) => `v1.2.0-beta.${30 - i}`)

const meta = {
  title: "Shadcn/Components/Scroll Area",
  component: ScrollArea,
  tags: ["autodocs"],
  render: (args) => (
    <ScrollArea {...args} className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
