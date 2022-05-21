export interface HeaderProps {
  id: number;
  title: string;
  subOne: MenuItem[];
  paths: string;
  target: string;
}

export interface MenuItem {
  id: number;
  subTitle: string;
  subTwo: SubMenu[];
}

export interface SubMenu {
  id: number;
  subTitle: string;
  paths: string;
  target: string;
}

export interface NavItemProps {
  title?: string;
  onClickNav?: () => void;
}
