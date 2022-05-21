import { Col, Row } from "antd";
import { ContainerPageProps } from "../../interface/container_page";
import styles from "./styles.module.scss";
const ContainerPage = ({ children }: ContainerPageProps) => {
  return (
    <Row className={styles.container}>
      <Col span={24}>{children}</Col>
    </Row>
  );
};
export default ContainerPage;
