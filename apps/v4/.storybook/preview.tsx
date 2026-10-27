import type { Preview } from "@storybook/nextjs-vite"

import "../app/globals.css"

import { withInspect } from "./inspect"

const preview: Preview = {
  decorators: [withInspect],
  parameters: {
    options: {
      storySort: {
        // Examples is a page at the bottom of Components, not its own section.
        order: [
          "Configure your project",
          "Shadcn",
          ["Components", ["*", "Variants", "Examples"]],
          "Example",
          "Playground",
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
}

export default preview
