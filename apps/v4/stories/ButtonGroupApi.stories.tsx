import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "../registry/new-york-v4/ui/button"
import { ButtonGroup } from "../registry/new-york-v4/ui/button-group"

const meta = {
  title: "Shadcn/Components/Button Group",
  component: ButtonGroup,
  tags: ["autodocs"],
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Archive</Button>
      <Button variant="outline">Report</Button>
      <Button variant="outline">Snooze</Button>
    </ButtonGroup>
  ),
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-start gap-6">
      {(["horizontal", "vertical"] as const).map((orientation) => (
        <ButtonGroup key={orientation} orientation={orientation}>
          <Button variant="outline">One</Button>
          <Button variant="outline">Two</Button>
          <Button variant="outline">Three</Button>
        </ButtonGroup>
      ))}
    </div>
  ),
}
