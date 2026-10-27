import type { Meta, StoryObj } from "@storybook/nextjs-vite"

function Typography() {
  return (
    <div className="max-w-xl">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
        The Joke Tax Chronicles
      </h1>
      <p className="text-xl text-muted-foreground">
        A modal dialog that interrupts the user with important content.
      </p>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        The People of the Kingdom
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax.
      </p>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        The Joke Tax
      </h3>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        &quot;After all,&quot; he said, &quot;everyone enjoys a good joke.&quot;
      </blockquote>
      <h4 className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
        People stopped telling jokes
      </h4>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners: 20 gold coins</li>
      </ul>
      <p className="leading-7">
        Use{" "}
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          @radix-ui/react-alert-dialog
        </code>{" "}
        for the dialog.
      </p>
      <div className="mt-6 text-lg font-semibold">Are you absolutely sure?</div>
      <small className="text-sm leading-none font-medium">Email address</small>
    </div>
  )
}

const meta = {
  title: "Shadcn/Components/Typography",
  component: Typography,
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
