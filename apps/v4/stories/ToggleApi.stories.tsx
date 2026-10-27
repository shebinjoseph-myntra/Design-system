import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Toggle } from "../registry/new-york-v4/ui/toggle"

const meta = {
  title: "Shadcn/Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  args: { variant: "default", size: "default", defaultPressed: false },
  render: (args) => <Toggle {...args}>Toggle</Toggle>,
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      {(["default", "outline"] as const).map((variant) => (
        <div key={variant} className="flex items-center gap-3">
          <span className="w-20 text-sm text-muted-foreground">{variant}</span>
          {(["sm", "default", "lg"] as const).map((size) => (
            <Toggle key={size} variant={variant} size={size}>
              {size}
            </Toggle>
          ))}
        </div>
      ))}
    </div>
  ),
}
