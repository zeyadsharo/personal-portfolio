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
