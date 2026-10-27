import * as React from "react"
import { addons } from "storybook/manager-api"

const STORAGE_KEY = "dev-started-components"

type Entry = {
  checked: boolean
  // When the box was last ticked. Kept after unticking so hover can still show it.
  lastChecked?: string
}
type Started = Record<string, Entry>

function readStarted(): Started {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}")
    // Migrate the earlier format: { [id]: isoString } (always checked).
    return Object.fromEntries(
      Object.entries(raw).map(([id, value]) => [
        id,
        typeof value === "string"
          ? { checked: true, lastChecked: value }
          : (value as Entry),
      ])
    )
  } catch {
    return {}
  }
}

function writeStarted(value: Started) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  } catch {
    // storage unavailable: the checkbox just won't persist
  }
}

function formatDateTime(iso: string) {
  return new Date(iso).toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
}

function describe(entry?: Entry) {
  if (!entry?.lastChecked) return "Not started yet. Tick to mark as started."
  const when = formatDateTime(entry.lastChecked)
  return entry.checked
    ? `Last checked: ${when}`
    : `Currently unchecked. Last checked: ${when}`
}

function StartedCheckbox({ id, name }: { id: string; name: string }) {
  const [entry, setEntry] = React.useState<Entry | undefined>(
    () => readStarted()[id]
  )

  const toggle = (event: React.SyntheticEvent) => {
    // Keep the click from selecting/expanding the sidebar row.
    event.stopPropagation()
    const started = readStarted()
    const current = started[id]
    const next: Entry = current?.checked
      ? { ...current, checked: false }
      : { checked: true, lastChecked: new Date().toISOString() }
    started[id] = next
    setEntry(next)
    writeStarted(started)
  }

  const title = describe(entry)

  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <input
        type="checkbox"
        checked={!!entry?.checked}
        onChange={() => {}}
        onClick={toggle}
        title={title}
        aria-label={`${name}: ${title}`}
        style={{ cursor: "pointer", margin: 0 }}
      />
      <span title={title}>{name}</span>
    </span>
  )
}

addons.setConfig({
  sidebar: {
    renderLabel: (item) =>
      item.type === "component" &&
      item.id.startsWith("shadcn-components-") &&
      !["shadcn-components-examples", "shadcn-components-variants"].includes(
        item.id
      ) ? (
        <StartedCheckbox id={item.id} name={item.name} />
      ) : (
        item.name
      ),
  },
})
