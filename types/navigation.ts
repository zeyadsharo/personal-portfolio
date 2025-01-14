export interface NavigationItem {
  label: string
  to: string
  icon?: string
  description?: string
  children?: NavigationItem[]
  target?: string
  exactHash?: boolean
}
