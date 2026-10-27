import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "../registry/new-york-v4/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../registry/new-york-v4/ui/hover-card"

const meta = {
  title: "Shadcn/Components/Hover Card",
  component: HoverCard,
  tags: ["autodocs"],
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@nextjs</h4>
          <p className="text-sm">
            The React Framework, created and maintained by @vercel.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
