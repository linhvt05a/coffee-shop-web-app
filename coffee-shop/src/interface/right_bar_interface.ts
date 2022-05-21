export interface RightBarItemProps {
  data: RightBarItemData[];
  onClickItem?: () => void;
}

export interface RightBarItemData {
  id: number;
  color: string;
  title: string;
  price: string;
  titleColor: string;
  priceColor: string;
}
