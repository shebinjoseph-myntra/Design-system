import * as React from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { InboxIcon, InfoIcon, SearchIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../registry/new-york-v4/ui/alert"
import { Badge } from "../registry/new-york-v4/ui/badge"
import { Bubble, BubbleContent } from "../registry/new-york-v4/ui/bubble"
import { Button } from "../registry/new-york-v4/ui/button"
import { ButtonGroup } from "../registry/new-york-v4/ui/button-group"
import { Checkbox } from "../registry/new-york-v4/ui/checkbox"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../registry/new-york-v4/ui/empty"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "../registry/new-york-v4/ui/field"
import { Input } from "../registry/new-york-v4/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "../registry/new-york-v4/ui/input-group"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "../registry/new-york-v4/ui/item"
import { Label } from "../registry/new-york-v4/ui/label"
import { Marker, MarkerContent } from "../registry/new-york-v4/ui/marker"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../registry/new-york-v4/ui/tabs"
import { Toggle } from "../registry/new-york-v4/ui/toggle"

const buttonVariants = [
  "default",
  "destructive",
  "outline",
  "secondary",
  "ghost",
  "link",
] as const
const buttonSizes = ["xs", "sm", "default", "lg"] as const
const iconSizes = ["icon-xs", "icon-sm", "icon", "icon-lg"] as const
const badgeVariants = [
  "default",
  "secondary",
  "destructive",
  "outline",
  "ghost",
  "link",
] as const
const bubbleVariants = [
  "default",
  "secondary",
  "muted",
  "tinted",
  "outline",
  "ghost",
  "destructive",
] as const
const tabsVariants = ["default", "line", "pills"] as const
const addonAligns = [
  "inline-start",
  "inline-end",
  "block-start",
  "block-end",
] as const

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-3">
      <h3 className="border-b pb-2 text-base font-semibold">{title}</h3>
      {children}
    </section>
  )
}

function Caption({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-muted-foreground">{children}</p>
}

function Variants() {
  const [disabled, setDisabled] = React.useState(false)

  return (
    <div className="flex w-full max-w-4xl flex-col gap-10">
      <div className="flex items-center gap-2">
        <Checkbox
          id="disable-all"
          checked={disabled}
          onCheckedChange={(value) => setDisabled(value === true)}
        />
        <Label htmlFor="disable-all">Show disabled state</Label>
      </div>

      <Section title="Button">
        <Caption>variant × size. Hover, focus and click them.</Caption>
        <div className="flex flex-col gap-3">
          {buttonVariants.map((variant) => (
            <div key={variant} className="flex flex-wrap items-center gap-3">
              <span className="w-24 text-sm text-muted-foreground">
                {variant}
              </span>
              {buttonSizes.map((size) => (
                <Button
                  key={size}
                  variant={variant}
                  size={size}
                  disabled={disabled}
                >
                  {size}
                </Button>
              ))}
              {iconSizes.map((size) => (
                <Button
                  key={size}
                  variant={variant}
                  size={size}
                  disabled={disabled}
                  aria-label={size}
                >
                  <SearchIcon />
                </Button>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Badge">
        <div className="flex flex-wrap gap-3">
          {badgeVariants.map((variant) => (
            <Badge key={variant} variant={variant}>
              {variant}
            </Badge>
          ))}
        </div>
      </Section>

      <Section title="Alert">
        <div className="flex max-w-md flex-col gap-3">
          {(["default", "destructive"] as const).map((variant) => (
            <Alert key={variant} variant={variant}>
              <InfoIcon />
              <AlertTitle>{variant}</AlertTitle>
              <AlertDescription>
                This is the {variant} alert variant.
              </AlertDescription>
            </Alert>
          ))}
        </div>
      </Section>

      <Section title="Toggle">
        <Caption>variant × size. Click to press and release.</Caption>
        <div className="flex flex-col gap-3">
          {(["default", "outline"] as const).map((variant) => (
            <div key={variant} className="flex flex-wrap items-center gap-3">
              <span className="w-24 text-sm text-muted-foreground">
                {variant}
              </span>
              {(["sm", "default", "lg"] as const).map((size) => (
                <Toggle
                  key={size}
                  variant={variant}
                  size={size}
                  disabled={disabled}
                >
                  {size}
                </Toggle>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Tabs">
        <Caption>Click between the tabs in each variant.</Caption>
        <div className="flex flex-col gap-6">
          {tabsVariants.map((variant) => (
            <Tabs key={variant} defaultValue="account" className="max-w-sm">
              <TabsList variant={variant}>
                <TabsTrigger value="account" disabled={disabled}>
                  Account
                </TabsTrigger>
                <TabsTrigger value="password" disabled={disabled}>
                  Password
                </TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="text-sm">
                {variant}: account settings.
              </TabsContent>
              <TabsContent value="password" className="text-sm">
                {variant}: change your password.
              </TabsContent>
            </Tabs>
          ))}
        </div>
      </Section>

      <Section title="Bubble">
        <div className="flex flex-wrap gap-3">
          {bubbleVariants.map((variant) => (
            <Bubble key={variant} variant={variant}>
              <BubbleContent>{variant}</BubbleContent>
            </Bubble>
          ))}
        </div>
      </Section>

      <Section title="Marker">
        <div className="flex max-w-md flex-col gap-4">
          {(["default", "separator", "border"] as const).map((variant) => (
            <Marker key={variant} variant={variant}>
              <MarkerContent>{variant}</MarkerContent>
            </Marker>
          ))}
        </div>
      </Section>

      <Section title="Item">
        <div className="flex max-w-md flex-col gap-3">
          {(["default", "outline", "muted"] as const).map((variant) => (
            <Item key={variant} variant={variant}>
              <ItemMedia variant="icon">
                <InboxIcon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{variant}</ItemTitle>
                <ItemDescription>Item {variant} variant.</ItemDescription>
              </ItemContent>
            </Item>
          ))}
        </div>
      </Section>

      <Section title="Button Group">
        <div className="flex flex-wrap items-start gap-6">
          {(["horizontal", "vertical"] as const).map((orientation) => (
            <ButtonGroup key={orientation} orientation={orientation}>
              <Button variant="outline" disabled={disabled}>
                One
              </Button>
              <Button variant="outline" disabled={disabled}>
                Two
              </Button>
              <Button variant="outline" disabled={disabled}>
                Three
              </Button>
            </ButtonGroup>
          ))}
        </div>
      </Section>

      <Section title="Field">
        <div className="flex max-w-md flex-col gap-5">
          {(["vertical", "horizontal", "responsive"] as const).map(
            (orientation) => (
              <Field key={orientation} orientation={orientation}>
                <FieldLabel htmlFor={`field-${orientation}`}>
                  {orientation}
                </FieldLabel>
                <Input
                  id={`field-${orientation}`}
                  placeholder="Type here"
                  disabled={disabled}
                />
                <FieldDescription>Orientation: {orientation}.</FieldDescription>
              </Field>
            )
          )}
        </div>
      </Section>

      <Section title="Input Group">
        <div className="flex max-w-md flex-col gap-4">
          {addonAligns.map((align) => (
            <InputGroup key={align}>
              <InputGroupInput placeholder={align} disabled={disabled} />
              <InputGroupAddon align={align}>
                <InputGroupText>{align}</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          ))}
        </div>
      </Section>

      <Section title="Empty">
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
      </Section>
    </div>
  )
}

const meta = {
  title: "Shadcn/Components/Variants",
  component: Variants,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Variants>

export default meta
type Story = StoryObj<typeof meta>

export const AllVariants: Story = {}
