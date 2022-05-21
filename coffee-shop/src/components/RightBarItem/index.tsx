import { Col, Row } from "antd";
import {
  RightBarItemData,
  RightBarItemProps,
} from "../../interface/right_bar_interface";
import styles from "./styles.module.scss";
const RightBarItem = ({ data }: RightBarItemProps) => {
  return (
    <Row className={styles.container}>
      {data.map((item: RightBarItemData) => (
        <Col
          span={12}
          style={{ backgroundColor: item.color }}
          className={styles.itemRow}
        >
          <div className={styles.item}>
            <div style={{ color: item.titleColor, fontWeight: "bold" }}>
              {item.title}
            </div>
            <div> {item.price}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default RightBarItem;
