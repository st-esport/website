import { XMLParser } from 'fast-xml-parser'

interface Activity {
  title: string
  team: string
  type: string
  date: string
  link: string
}

const RSS_URL = 'https://www.holdsport.dk/club/activities.rss?token=jw2VUiEv1ZR31ZL0nnD_uw'

export default defineEventHandler(async (): Promise<Activity[]> => {
  const response = await fetch(RSS_URL)
  const xml = await response.text()

  const parser = new XMLParser({ ignoreAttributes: false })
  const parsed = parser.parse(xml)

  const items = parsed?.rss?.channel?.item
  if (!items) return []

  const itemList = Array.isArray(items) ? items : [items]

  const now = new Date()

  return itemList
    .map((item: Record<string, string>) => ({
      title: item['holdsport:title'] || item.title || '',
      team: item['holdsport:teams'] || '',
      type: item['holdsport:type'] || '',
      date: item.pubDate || '',
      link: item.link || '',
    }))
    .filter((a: Activity) => new Date(a.date) >= now)
    .sort((a: Activity, b: Activity) => new Date(a.date).getTime() - new Date(b.date).getTime())
})
