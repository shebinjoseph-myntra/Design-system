import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { InboxIcon } from "lucide-react"
import { EmptyMedia } from "../registry/new-york-v4/ui/empty"

import { Button } from "../registry/new-york-v4/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "../registry/new-york-v4/ui/empty"

const meta = {
  title: "Shadcn/Components/Empty",
  component: Empty,
  tags: ["autodocs"],
  render: (args) => (
    <Empty {...args}>
      <EmptyHeader>
        <EmptyTitle>No projects yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating
          your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Create project</Button>
      </EmptyContent>
    </Empty>
  ),
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {(["default", "icon"] as const).map((variant) => (
        <Empty key={variant} className="w-64 border">
          <EmptyHeader>
            <EmptyMedia variant={variant}>
              <InboxIcon />
            </EmptyMedia>
            <EmptyTitle>{variant}</EmptyTitle>
            <EmptyDescription>Empty media {variant}.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      ))}
    </div>
  ),
}
