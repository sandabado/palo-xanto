import assert from "node:assert/strict"
import { readFileSync, readdirSync, statSync } from "node:fs"
import { join } from "node:path"

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
].filter((file) => /\.(tsx?|css)$/.test(file))

for (const file of sourceFiles) {
  const source = readFileSync(file, "utf8")
  assert.doesNotMatch(
    source,
    /\bconsole\.(log|debug)\(/,
    `${file} contains debug output`,
  )
  assert.doesNotMatch(
    source,
    /\b(?:TODO|FIXME)\b/,
    `${file} contains unfinished work`,
  )
  assert.doesNotMatch(
    source,
    /sk_(?:live|test)_/,
    `${file} contains a Stripe secret`,
  )
}

console.log(`Palo source lint passed (${sourceFiles.length} files).`)
