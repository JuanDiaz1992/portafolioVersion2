const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const root = path.join(__dirname, '..', 'public', 'img')
const exts = ['.jpg', '.jpeg', '.png', '.webp']

function walk(dir) {
  const files = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...walk(full))
    else files.push(full)
  }
  return files
}

async function processFile(file) {
  const ext = path.extname(file).toLowerCase()
  if (!exts.includes(ext)) return
  try {
    const img = sharp(file)
    const meta = await img.metadata()
    const dir = path.dirname(file)
    const name = path.basename(file, ext)

    // create compressed baseline webp
    const outWebp = path.join(dir, `${name}.opt.webp`)
    if (!fs.existsSync(outWebp)) {
      await img
        .webp({ quality: 80 })
        .toFile(outWebp)
      console.log('created', outWebp)
    }

    // responsive sizes (only if original wider)
    const sizes = [1200, 800, 480]
    for (const w of sizes) {
      if (meta.width && meta.width > w) {
        const out = path.join(dir, `${name}@${w}.webp`)
        if (!fs.existsSync(out)) {
          await img
            .resize({ width: w })
            .webp({ quality: 75 })
            .toFile(out)
          console.log('created', out)
        }
      }
    }
  } catch (err) {
    console.error('error processing', file, err.message)
  }
}

async function main() {
  console.log('Scanning', root)
  const files = walk(root)
  for (const f of files) {
    await processFile(f)
  }
  console.log('Done')
}

main().catch(err => { console.error(err); process.exit(1) })
