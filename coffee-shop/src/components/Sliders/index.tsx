import { useNavigate } from "react-router";
import SlickPage from "react-slick";
import { SLIDER_SETTING } from "../../constants/paging_setting";
import {
  PagingPromotionProps,
  PromotionBannerProps,
} from "../../interface/promotion_banner_interface";
import ItemSlider from "../ItemSlider";
import styles from "./styles.module.scss";
const PagingPromotion = ({ dataBanner }: PagingPromotionProps) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.sliderContainer}
      onClick={() => navigate("/san-pham/khuyen-mai")}
    >
      <SlickPage {...SLIDER_SETTING}>
        {dataBanner.map((slider: PromotionBannerProps) => (
          <ItemSlider image={slider.image} />
        ))}
      </SlickPage>
    </div>
  );
};

export default PagingPromotion;
