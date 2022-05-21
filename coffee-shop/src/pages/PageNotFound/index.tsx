import { NotFound } from "../../constants/icons";
import styles from "./styles.module.scss";
const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <img alt="dream-shoes" src={NotFound} className={styles.images} />
    </div>
  );
};

export default PageNotFound;
