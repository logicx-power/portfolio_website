export type SubmenuItem = {
  label: string
  href: string
}

export type NavLinkType = {
  label: string
  href: string
  submenu?: SubmenuItem[]
}
