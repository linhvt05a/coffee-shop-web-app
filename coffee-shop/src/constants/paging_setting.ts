import { PromotionBannerProps } from "../interface/promotion_banner_interface";
import { IMAGES } from "./images";

export const SLIDER_SETTING = {
//   dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  fade: true,
};

export const PROMOTION_BANNER: PromotionBannerProps[] = [
  { image: IMAGES.sider_1 },
  { image: IMAGES.sider_2 },
  { image: IMAGES.sider_3 },
  { image: IMAGES.sider_4 },
  { image: IMAGES.sider_5 },
];
