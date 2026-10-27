import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../registry/new-york-v4/ui/resizable"

const meta = {
  title: "Shadcn/Components/Resizable",
  component: ResizablePanelGroup,
  tags: ["autodocs"],
  args: { direction: "horizontal" },
  render: (args) => (
    <ResizablePanelGroup
      {...args}
      className="max-w-md rounded-lg border md:min-w-[450px]"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">Two</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
} satisfies Meta<typeof ResizablePanelGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
