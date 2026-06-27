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

export interface SkillItem {
  name: string
  level: number
  learning?: boolean
}

export interface Skill {
  category: string
  items: SkillItem[]
}
