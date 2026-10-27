import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Bubble as AllVariantsBubble, BubbleContent as AllVariantsBubbleContent } from "../registry/new-york-v4/ui/bubble"

import { BubbleGroup } from "../registry/new-york-v4/ui/bubble"

const meta = {
  title: "Shadcn/Components/Bubble",
  component: BubbleGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof BubbleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      {(
        ["default", "secondary", "muted", "tinted", "outline", "ghost", "destructive"] as const
      ).map((variant) => (
        <AllVariantsBubble key={variant} variant={variant}>
          <AllVariantsBubbleContent>{variant}</AllVariantsBubbleContent>
        </AllVariantsBubble>
      ))}
    </div>
  ),
}
