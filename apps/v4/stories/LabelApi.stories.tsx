import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Checkbox } from "../registry/new-york-v4/ui/checkbox"
import { Label } from "../registry/new-york-v4/ui/label"

const meta = {
  title: "Shadcn/Components/Label",
  component: Label,
  tags: ["autodocs"],
  args: { children: "Accept terms and conditions" },
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label {...args} htmlFor="terms" />
    </div>
  ),
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
