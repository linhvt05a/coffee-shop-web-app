import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const MenuBar = () => {
  return (
    <div className={styles.mainNav}>
      <Link to={"/"} className={styles.navLink}>
        HomePage
      </Link>
    </div>
  );
};

export default MenuBar;
