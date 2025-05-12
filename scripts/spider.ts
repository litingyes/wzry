import { resolve } from 'node:path'
import { writeFileSync } from 'fs-extra'
import { ofetch } from 'ofetch'

async function main() {
  await refreshHeroes()
}

async function refreshHeroes() {
  const heroList = await ofetch('https://pvp.qq.com/web201605/js/herolist.json', {
    responseType: 'json',
  })
  writeFileSync(resolve(__dirname, '../data/heroes.json'), JSON.stringify(heroList, null, 2), 'utf-8')
}

main()
