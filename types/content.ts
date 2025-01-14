// ...existing code...

export interface HeroContent {
  headline?: string
  name: string
  title: string
  description: string
  links: HeroLink[]
}

export interface HeroLink {
  label: string
  to: string
  icon?: string
  color?: string
  size?: string
  target?: string
}

export interface Skill {
  name: string
  description: string
  icon: string
}

export interface AboutSection {
  headline: string
  title: string
  description: string
  skills: Skill[]
}
