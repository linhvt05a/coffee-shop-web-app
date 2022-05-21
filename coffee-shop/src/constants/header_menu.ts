import { HeaderProps } from "../interface/header_interface";

const HEADER_MENU: HeaderProps[] = [
  { id: 1, title: "TRANG CHỦ", subOne: [], paths: "/", target: "" },
  { id: 2, title: "GIỚI THIỆU", subOne: [], paths: "/gioi-thieu", target: "" },
  {
    id: 3,
    title: "NỮ",
    paths: "/san-pham/nu",
    target: "",
    subOne: [
      { id: 1, subTitle: "Giày", subTwo: [] },
      { id: 2, subTitle: "Dép", subTwo: [] },
      { id: 3, subTitle: "Áo thun", subTwo: [] },
      { id: 4, subTitle: "Quần dài", subTwo: [] },
      { id: 5, subTitle: "Quần shorts", subTwo: [] },
      { id: 6, subTitle: "Đồ lót", subTwo: [] },
      {
        id: 7,
        subTitle: "Phụ kiện thời trang",
        subTwo: [],
      },
      { id: 8, subTitle: "Đồ lót", subTwo: [] },
      { id: 9, subTitle: "Váy đầm", subTwo: [] },
    ],
  },
  {
    id: 4,
    title: "NAM",
    paths: "/san-pham/nam",
    target: "",
    subOne: [
      { id: 1, subTitle: "Giày", subTwo: [] },
      { id: 2, subTitle: "Dép", subTwo: [] },
      { id: 3, subTitle: "Áo thun", subTwo: [] },
      { id: 4, subTitle: "Quần dài", subTwo: [] },
      { id: 5, subTitle: "Quần shorts", subTwo: [] },
      { id: 6, subTitle: "Đồ lót", subTwo: [] },
      { id: 7, subTitle: "Phụ kiện thời trang", subTwo: [] },
    ],
  },
  {
    id: 5,
    title: "TRẺ EM",
    paths: "/san-pham/tre-em",
    target: "",
    subOne: [
      { id: 1, subTitle: "Bé trai", subTwo: [] },
      { id: 2, subTitle: "Bé gái", subTwo: [] },
      { id: 3, subTitle: "Giày đi học", subTwo: [] },
    ],
  },
  {
    id: 6,
    title: "PHỤ KIỆN KHÁC",
    subOne: [],
    paths: "san-pham/phu-kien-thoi-trang",
    target: "",
  },
  { id: 7, title: "TIN TỨC ", subOne: [], paths: "/tin-tuc", target: "" },
  { id: 8, title: "LIÊN HỆ", subOne: [], paths: "/lien-he", target: "" },
];

export { HEADER_MENU };
