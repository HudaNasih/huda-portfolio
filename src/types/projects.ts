export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  year: string
  featured: boolean
  emoji: string
  url: string
  urlLabel: string
  features: string[]
  role: string
}

export interface Skill {
  category: string
  items: string[]
}
