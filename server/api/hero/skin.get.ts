import { random, shuffle } from 'lodash-es'
import heroes from '~/data/heroes.json'
import heroTypes from '~/data/heroTypes.json'
import { getHeroBigSkin } from '~/utils/heroLink'

const skins = heroes.map(hero => hero.skin_name.split('|').map((skinName, skinIndex) => ({
  ...hero,
  skinName,
  skinLink: getHeroBigSkin(hero.ename, skinIndex),
}))).flat()

export default defineEventHandler(async (event) => {
  const query = await getQuery<{
    heroType?: string
    heroId?: string
    type?: 'image' | 'metadata'
  }>(event)

  if (query.heroType && !heroTypes.map(type => type.id).includes(Number(query.heroType))) {
    throw createError({
      statusCode: 400,
      message: '无效参数 heroType',
    })
  }

  if (query.heroId && !heroes.map(hero => hero.ename).includes(Number(query.heroId))) {
    throw createError({
      statusCode: 400,
      message: '无效参数 heroId',
    })
  }

  const filteredSkins = skins.filter((skin) => {
    return (!query.heroType || [skin.hero_type, skin.hero_type2].includes(Number(query.heroType))) && (!query.heroId || skin.ename === Number(query.heroId))
  })

  if (!filteredSkins.length) {
    throw createError({
      statusCode: 400,
      message: '当前查询参数下无数据',
    })
  }

  const skin = shuffle(filteredSkins)[random(0, filteredSkins.length - 1)]

  if (query.type === 'metadata') {
    return skin
  }

  return await $fetch(skin.skinLink)
})
