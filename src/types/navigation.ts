export interface NavItem {
  title: string;
  href: string;
  isExternal?: boolean;
}

export interface FooterLinkGroup {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
}
