import { ItemSliderProps } from "../../interface/promotion_banner_interface";
import styles from "./styles.module.scss";
const ItemSlider = ({ image }: ItemSliderProps) => {
  return (
    <div>
      <img
        alt="banner"
        src={image}
        style={{ borderRadius: 10 }}
        className={styles.bannerImage}
      />
    </div>
  );
};
export default ItemSlider;
