export interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

export interface QuickLink {
  name: string;
  href: string;
  icon?: React.ReactNode;
}