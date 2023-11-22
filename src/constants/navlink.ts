export enum linkName {
  Home = 'Home',
  About = 'About',
  Profile = 'Profile',
  Product = 'Product'
}

export enum linkHref {
  Home = '/',
  About = '/about',
  Profile = '/about/profile',
  Product = '/product'
}

export type Navlink = {
  name: linkName
  href: linkHref
}

export const navlink: Navlink[] = [
  {
    name: linkName.Home,
    href: linkHref.Home
  },
  {
    name: linkName.About,
    href: linkHref.About
  },
  {
    name: linkName.Profile,
    href: linkHref.Profile
  },
  {
    name: linkName.Product,
    href: linkHref.Product
  }
]
