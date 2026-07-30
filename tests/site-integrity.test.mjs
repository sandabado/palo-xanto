import assert from "node:assert/strict"
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs"
import { join } from "node:path"
import test from "node:test"

const root = new URL("..", import.meta.url).pathname

function filesIn(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry)
    return statSync(path).isDirectory() ? filesIn(path) : [path]
  })
}

const sourceFiles = [
  ...filesIn(join(root, "app")),
  ...filesIn(join(root, "components")),
  ...filesIn(join(root, "lib")),
]
const source = sourceFiles
  .filter((file) => /\.(tsx?|css)$/.test(file))
  .map((file) => readFileSync(file, "utf8"))
  .join("\n")

test("required Palo Xanto public routes exist", () => {
  for (const route of [
    "app/page.tsx",
    "app/about/page.tsx",
    "app/music/page.tsx",
    "app/tour/page.tsx",
    "app/events/page.tsx",
    "app/press/page.tsx",
    "app/booking/page.tsx",
    "app/login/page.tsx",
  ]) {
    assert.ok(statSync(join(root, route)).isFile(), `${route} is missing`)
  }
})

test("Sandabado identity and live payment credentials are absent", () => {
  assert.doesNotMatch(source, /Sandābādo|SANDĀBĀDO|∞ LOVE|sk_live|pk_live/)
})

test("public site has no service-role or direct private-table client", () => {
  assert.doesNotMatch(
    source,
    /service[_-]?role|SUPABASE_SERVICE|from\(["']artists["']\)|from\(["']revenue_ledger["']\)/i,
  )
  assert.match(source, /published_entities/)
})

test("checkout and webhook routes are absent", () => {
  const apiDirectory = join(root, "app", "api")
  const apiFiles = existsSync(apiDirectory) ? filesIn(apiDirectory) : []
  assert.deepEqual(apiFiles, [])
})

test("artist identity and approved public links are present", () => {
  assert.match(source, /PALO XANTO/)
  assert.match(source, /2wPQ39ZGqrsgjtBdYj5A82/)
  assert.match(source, /paloxanto\.bandcamp\.com/)
  assert.match(source, /peace@paloxanto\.com/)
})
