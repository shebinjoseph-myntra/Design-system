# shadcn tokens: Applique values (light mode)

Same 20 token rows as the original table. Only the hex codes are verified against what is implemented in `apps/v4/app/globals.css` (`:root`), resolved through `apps/v4/app/tokens/primitives.css` and `primitives-tailwind.css`.

| Token | Value (specified) | Implemented as | Resolved hex | Match | Used for |
|---|---|---|---|---|---|
| `--background` | `#ffffff` | `--tailwind-white` | `#ffffff` | ✅ | Page background |
| `--foreground` | `#262a39` | `--noir-80-base` | `#262a39` | ✅ | Default text |
| `--primary` | `#5232d0` | `--indigo-100-base` | `#5232d0` | ✅ | Primary buttons, links |
| `--primary-foreground` | `#fafafa` | `--tailwind-neutral-50` | `#fafafa` | ✅ | Text on primary |
| `--secondary` | `#f0ecff` | `--indigo-10` | `#f0ecff` | ✅ | Secondary buttons |
| `--secondary-foreground` | `#171717` | `--tailwind-neutral-900` | `#171717` | ✅ | Text on secondary |
| `--card`, `--popover` | `#ffffff` | `--tailwind-white` | `#ffffff` | ✅ | Surface backgrounds |
| `--card-foreground`, `--popover-foreground` | `#0a0a0a` | `--tailwind-neutral-950` | `#0a0a0a` | ✅ | Surface text |
| `--muted` | `#f5f5f5` | `--tailwind-neutral-100` | `#f5f5f5` | ✅ | Subtle backgrounds |
| `--muted-foreground` | `#737373` | `--tailwind-neutral-500` | `#737373` | ✅ | Secondary text |
| `--accent` | `#f5f5f5` | `--tailwind-neutral-100` | `#f5f5f5` | ✅ | Hover backgrounds |
| `--accent-foreground` | `#686b77` | `--noir-60` | `#686b77` | ✅ | Accent text |
| `--destructive` | `#b63a2a` | `--cherry-140` | `#b63a2a` | ✅ | Error/destructive actions |
| `--destructive-foreground` | `#fef2f2` | `--tailwind-red-50` | `#fef2f2` | ✅ | Text on destructive |
| `--border`, `--input` | `#e5e5e5` | `--tailwind-neutral-200` | `#e5e5e5` | ✅ | Borders |
| `--ring` | `#5232d0` | `--indigo-100-base` | `#5232d0` | ✅ | Focus border |
| `--focus` | `#8465ff` at 50% | `color-mix(--indigo-80 50%, transparent)` | `#8465ff` at 50% (`#8465ff80`) | ✅ | Focus halo |
| `--focus-destructive` | `#dc2626` at 20% | `color-mix(--tailwind-red-600 20%, transparent)` | `#dc2626` at 20% (`#dc262633`) | ✅ | Error focus halo |
| `--primary-hover` | 90% primary mixed with white | `color-mix(--primary 90%, white)` | ≈ `#6347d5` | ✅ | Primary hover |
| `--secondary-hover` | 80% secondary mixed with white | `color-mix(--secondary 80%, white)` | ≈ `#f3f0ff` | ✅ | Secondary hover |

## Notes

- All 20 rows match. No token was added, removed or renamed.
- The two hover tokens are formulas, not hex values. The resolved hex shown is computed from the formula (sRGB mix) and may differ by 1 digit depending on rounding.
- Dark mode (`.dark` in `globals.css`) is not covered by this table and still uses the old shadcn neutrals (for example `--primary: #e5e5e5`). It has not been changed.
