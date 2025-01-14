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

export interface ProjectCard {
  title: string
  description: string
  image: string
  tech: string[]
  color?: string
  link: string
  class?: string
}

export interface ProjectsSection {
  headline: string
  title: string
  description: string
  projects: ProjectCard[]
}
