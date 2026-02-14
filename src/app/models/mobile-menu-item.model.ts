export interface MobileMenuItem {
  title: string;
  link: string;
  isOpen?: boolean;
  subMenu?: MobileMenuItem[];
}
