import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Marker,
  MarkerContent,
} from "../registry/new-york-v4/ui/marker"

const meta = {
  title: "Shadcn/Components/Marker",
  component: Marker,
  tags: ["autodocs"],
  args: { variant: "separator" },
  render: (args) => (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Marker {...args}>
        <MarkerContent>Today</MarkerContent>
      </Marker>
      <Marker variant="default">
        <MarkerContent>Default marker</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerContent>Border marker</MarkerContent>
      </Marker>
    </div>
  ),
} satisfies Meta<typeof Marker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllVariants: Story = {
  render: () => (
    <div className="flex w-full max-w-md flex-col gap-4">
      {(["default", "separator", "border"] as const).map((variant) => (
        <Marker key={variant} variant={variant}>
          <MarkerContent>{variant}</MarkerContent>
        </Marker>
      ))}
    </div>
  ),
}
