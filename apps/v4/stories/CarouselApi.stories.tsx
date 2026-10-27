import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Card, CardContent } from "../registry/new-york-v4/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../registry/new-york-v4/ui/carousel"

const meta = {
  title: "Shadcn/Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  render: (args) => (
    <Carousel {...args} className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
