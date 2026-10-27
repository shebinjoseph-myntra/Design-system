import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { FileTextIcon, ImageIcon, XIcon } from "lucide-react"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "../registry/new-york-v4/ui/attachment"

const meta = {
  title: "Shadcn/Components/Attachment",
  component: Attachment,
  tags: ["autodocs"],
  args: { state: "done", size: "default", orientation: "horizontal" },
  render: (args) => (
    <div className="flex flex-col gap-6">
      <Attachment {...args}>
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>
          <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove sales-dashboard.pdf">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>

      <div className="flex flex-wrap gap-3">
        {(["idle", "uploading", "processing", "error", "done"] as const).map(
          (state) => (
            <Attachment key={state} state={state}>
              <AttachmentMedia>
                <ImageIcon />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>photo.png</AttachmentTitle>
                <AttachmentDescription>{state}</AttachmentDescription>
              </AttachmentContent>
              <AttachmentActions>
                <AttachmentAction aria-label="Remove photo.png">
                  <XIcon />
                </AttachmentAction>
              </AttachmentActions>
            </Attachment>
          )
        )}
      </div>

      <Attachment orientation="vertical">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>report.pdf</AttachmentTitle>
          <AttachmentDescription>1.1 MB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove report.pdf">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    </div>
  ),
} satisfies Meta<typeof Attachment>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
