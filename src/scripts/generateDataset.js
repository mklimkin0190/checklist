import { promises as fs } from 'fs'

(() => {
  const DATA_LENGTH = +process.argv[2] || 100
  console.log(DATA_LENGTH)
  const data = [...Array(DATA_LENGTH).keys()].map((i) => ({
    title: `Title ${i}`,
    description: `Description ${i}`,
    link: Math.random() > 0.5 ? `Link ${i}` : undefined
  }))
  return fs.writeFile('./src/assets/testDataset.json', JSON.stringify(data))
})()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })

export {}
