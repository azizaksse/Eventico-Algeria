import { mkdir, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const projectRoot = path.resolve(process.cwd(), 'public')

const targets = [
  {
    input: 'eventico.jpg',
    output: 'eventico.webp',
    width: 1600,
    quality: 72,
    label: 'Hero visual',
  },
  {
    input: 'crono-focus.JPG',
    output: 'crono-focus.webp',
    width: 1400,
    quality: 72,
    label: 'Chrono Focus case',
  },
  {
    input: 'webscale.jpg',
    output: 'webscale.webp',
    width: 1400,
    quality: 72,
    label: 'Webscale case',
  },
  {
    input: 'stock.jpeg',
    output: 'stock.webp',
    width: 1400,
    quality: 70,
    label: 'Stork case',
  },
  {
    input: 'services/avant-evenement.jpg',
    output: 'services/avant-evenement.webp',
    width: 1200,
    quality: 75,
    label: 'Avant service',
  },
  {
    input: 'services/pendant-evenement.jpg',
    output: 'services/pendant-evenement.webp',
    width: 1200,
    quality: 72,
    label: 'Pendant service',
  },
  {
    input: 'services/apres-evenement.jpg',
    output: 'services/apres-evenement.webp',
    width: 1200,
    quality: 75,
    label: 'Apres service',
  },
]

async function ensureDir(filePath) {
  const dir = path.dirname(filePath)
  await mkdir(dir, { recursive: true })
}

async function formatSize(file) {
  const { size } = await stat(file)
  const kb = size / 1024
  return `${kb.toFixed(kb > 1024 ? 1 : 0)} KB`
}

async function processImage({ input, output, width, quality, label }) {
  const inputPath = path.join(projectRoot, input)
  const outputPath = path.join(projectRoot, output)
  await ensureDir(outputPath)

  await sharp(inputPath)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(outputPath)

  const [origSize, newSize] = await Promise.all([
    formatSize(inputPath),
    formatSize(outputPath),
  ])
  console.log(`${label.padEnd(18)}: ${input} (${origSize}) -> ${output} (${newSize})`)
}

async function run() {
  for (const target of targets) {
    await processImage(target)
  }
}

run().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
