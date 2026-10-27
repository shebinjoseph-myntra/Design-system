import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Bubble, BubbleContent } from "../registry/new-york-v4/ui/bubble"
import { Message, MessageContent } from "../registry/new-york-v4/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "../registry/new-york-v4/ui/message-scroller"

const messages = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  align: i % 2 === 0 ? ("start" as const) : ("end" as const),
  text:
    i % 2 === 0
      ? `Question ${i / 2 + 1}: how do the tokens map?`
      : `Answer ${(i + 1) / 2}: each one points at a primitive.`,
}))

const meta = {
  title: "Shadcn/Components/Message Scroller",
  component: MessageScrollerProvider,
  tags: ["autodocs"],
  render: (args) => (
    <div className="h-80 w-full max-w-md rounded-lg border">
      <MessageScrollerProvider {...args}>
        <MessageScroller>
          <MessageScrollerViewport>
            <MessageScrollerContent className="gap-3 p-4">
              {messages.map((message) => (
                <MessageScrollerItem key={message.id} messageId={message.id}>
                  <Message align={message.align}>
                    <MessageContent>
                      <Bubble
                        variant={message.align === "end" ? "secondary" : "default"}
                      >
                        <BubbleContent>{message.text}</BubbleContent>
                      </Bubble>
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
    </div>
  ),
} satisfies Meta<typeof MessageScrollerProvider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
