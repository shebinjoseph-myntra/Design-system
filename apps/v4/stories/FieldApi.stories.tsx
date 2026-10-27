import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "../registry/new-york-v4/ui/field"
import { Input } from "../registry/new-york-v4/ui/input"

const meta = {
  title: "Shadcn/Components/Field",
  component: Field,
  tags: ["autodocs"],
  render: (args) => (
    <FieldGroup className="w-full max-w-sm">
      <Field {...args}>
        <FieldLabel htmlFor="username">Username</FieldLabel>
        <Input id="username" placeholder="Max Leiter" />
        <FieldDescription>
          Choose a unique username for your account.
        </FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input id="email" type="email" placeholder="you@example.com" />
      </Field>
    </FieldGroup>
  ),
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllVariants: Story = {
  render: () => (
    <div className="flex w-full max-w-md flex-col gap-5">
      {(["vertical", "horizontal", "responsive"] as const).map((orientation) => (
        <Field key={orientation} orientation={orientation}>
          <FieldLabel htmlFor={`field-${orientation}`}>{orientation}</FieldLabel>
          <Input id={`field-${orientation}`} placeholder="Type here" />
          <FieldDescription>Orientation: {orientation}.</FieldDescription>
        </Field>
      ))}
    </div>
  ),
}
