import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { InputGroupInput as AllVariantsInput } from "../registry/new-york-v4/ui/input-group"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "../registry/new-york-v4/ui/input-group"

const meta = {
  title: "Shadcn/Components/Input Group",
  component: InputGroup,
  tags: ["autodocs"],
  render: (args) => (
    <InputGroup {...args} className="max-w-sm">
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllVariants: Story = {
  render: () => (
    <div className="flex w-full max-w-md flex-col gap-4">
      {(["inline-start", "inline-end", "block-start", "block-end"] as const).map(
        (align) => (
          <InputGroup key={align}>
            <AllVariantsInput placeholder={align} />
            <InputGroupAddon align={align}>
              <InputGroupText>{align}</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        )
      )}
    </div>
  ),
}
