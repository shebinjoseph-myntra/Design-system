import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Avatar, AvatarFallback } from "../registry/new-york-v4/ui/avatar"
import { Bubble, BubbleContent } from "../registry/new-york-v4/ui/bubble"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "../registry/new-york-v4/ui/message"

const meta = {
  title: "Shadcn/Components/Message",
  component: MessageGroup,
  tags: ["autodocs"],
  render: (args) => (
    <MessageGroup {...args} className="w-full max-w-md">
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>Alex</MessageHeader>
          <Bubble>
            <BubbleContent>Hey, did the new tokens land?</BubbleContent>
          </Bubble>
          <MessageFooter>10:24 AM</MessageFooter>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble variant="secondary">
            <BubbleContent>Yes, all 20 match the design system.</BubbleContent>
          </Bubble>
          <MessageFooter>10:25 AM</MessageFooter>
        </MessageContent>
      </Message>
    </MessageGroup>
  ),
} satisfies Meta<typeof MessageGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
