# Component review checklist

Source list: https://ui.shadcn.com/docs/components (66 components). Storybook: `apps/v4/stories`, opened at http://localhost:6006 under **Shadcn/Components**.

How to use: tick `[x]` and write the review date (YYYY-MM-DD) when a component is reviewed. Dates are left blank on purpose; nothing here has been reviewed yet.

| Done | Component | In Storybook | Reviewed on |
|---|---|---|---|
| [ ] | Accordion | ✅ Present | ____-__-__ |
| [ ] | Alert | ✅ Present | ____-__-__ |
| [ ] | Alert Dialog | ✅ Present | ____-__-__ |
| [ ] | Aspect Ratio | ✅ Present | ____-__-__ |
| [ ] | Attachment | ✅ Present | ____-__-__ |
| [ ] | Avatar | ✅ Present | ____-__-__ |
| [ ] | Badge | ✅ Present | ____-__-__ |
| [ ] | Breadcrumb | ✅ Present | ____-__-__ |
| [ ] | Bubble | ✅ Present | ____-__-__ |
| [ ] | Button | ✅ Present | ____-__-__ |
| [ ] | Button Group | ✅ Present | ____-__-__ |
| [ ] | Calendar | ✅ Present | ____-__-__ |
| [ ] | Card | ✅ Present | ____-__-__ |
| [ ] | Carousel | ✅ Present | ____-__-__ |
| [ ] | Chart | ✅ Present | ____-__-__ |
| [ ] | Checkbox | ✅ Present | ____-__-__ |
| [ ] | Code Block | ❌ Missing | ____-__-__ |
| [ ] | Collapsible | ✅ Present | ____-__-__ |
| [ ] | Combobox | ✅ Present | ____-__-__ |
| [ ] | Command | ✅ Present | ____-__-__ |
| [ ] | Context Menu | ✅ Present | ____-__-__ |
| [ ] | Data Table | ✅ Added today | ____-__-__ |
| [ ] | Date Picker | ✅ Added today | ____-__-__ |
| [ ] | Dialog | ✅ Present | ____-__-__ |
| [ ] | Direction | ✅ Present | ____-__-__ |
| [ ] | Drawer | ✅ Present | ____-__-__ |
| [ ] | Dropdown Menu | ✅ Present | ____-__-__ |
| [ ] | Empty | ✅ Present | ____-__-__ |
| [ ] | Field | ✅ Present | ____-__-__ |
| [ ] | Hover Card | ✅ Present | ____-__-__ |
| [ ] | Input | ✅ Present | ____-__-__ |
| [ ] | Input Group | ✅ Present | ____-__-__ |
| [ ] | Input OTP | ✅ Present | ____-__-__ |
| [ ] | Item | ✅ Present | ____-__-__ |
| [ ] | Kbd | ✅ Present | ____-__-__ |
| [ ] | Label | ✅ Present | ____-__-__ |
| [ ] | Marker | ✅ Present | ____-__-__ |
| [ ] | Menubar | ✅ Present | ____-__-__ |
| [ ] | Message | ✅ Present | ____-__-__ |
| [ ] | Message Scroller | ✅ Present | ____-__-__ |
| [ ] | Native Select | ✅ Present | ____-__-__ |
| [ ] | Navigation Menu | ✅ Present | ____-__-__ |
| [ ] | Pagination | ✅ Present | ____-__-__ |
| [ ] | Popover | ✅ Present | ____-__-__ |
| [ ] | Progress | ✅ Present | ____-__-__ |
| [ ] | Questionnaire | ❌ Missing | ____-__-__ |
| [ ] | Radio Group | ✅ Present | ____-__-__ |
| [ ] | Resizable | ✅ Present | ____-__-__ |
| [ ] | Scroll Area | ✅ Present | ____-__-__ |
| [ ] | Select | ✅ Present | ____-__-__ |
| [ ] | Separator | ✅ Present | ____-__-__ |
| [ ] | Sheet | ✅ Present | ____-__-__ |
| [ ] | Sidebar | ✅ Present | ____-__-__ |
| [ ] | Skeleton | ✅ Present | ____-__-__ |
| [ ] | Slider | ✅ Present | ____-__-__ |
| [ ] | Spinner | ✅ Present | ____-__-__ |
| [ ] | Switch | ✅ Present | ____-__-__ |
| [ ] | Table | ✅ Present | ____-__-__ |
| [ ] | Tabs | ✅ Present | ____-__-__ |
| [ ] | Textarea | ✅ Present | ____-__-__ |
| [ ] | Toast | ➖ Deprecated; covered by Sonner | ____-__-__ |
| [ ] | Toggle | ✅ Present | ____-__-__ |
| [ ] | Toggle Group | ✅ Present | ____-__-__ |
| [ ] | Tooltip | ✅ Present | ____-__-__ |
| [ ] | Trace | ❌ Missing | ____-__-__ |
| [ ] | Typography | ✅ Added today | ____-__-__ |

## Storybook gaps

- **Code Block, Trace:** no component exists in the repo to build a story from.
- **Questionnaire:** a component exists only in `registry/bases/radix/ui/questionnaire.tsx`. It depends on `@shadcn/react/questionnaire`, and Storybook's other stories use `registry/new-york-v4/ui`, so I didn't add a story.
- **Toast:** deprecated upstream in favour of Sonner, which has a story.

## Extra stories not in the docs list

Form (`FormApi`), Sonner (`SonnerApi`).
