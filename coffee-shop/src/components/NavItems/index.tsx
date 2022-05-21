import { NavItemProps } from "../../interface/header_interface";
import styles from "./stlyes.module.scss";
const NavItems = ({ title, onClickNav }: NavItemProps) => {
  return (
    <div className={styles.navItem} onClick={onClickNav}>
      {title}
    </div>
  );
};

export default NavItems;
