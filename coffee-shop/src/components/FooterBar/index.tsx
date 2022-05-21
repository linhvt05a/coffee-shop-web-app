import { Col, Row } from "antd";
import { AppStore, BocoIcon, GoogleStore, Logo } from "../../constants/icons";
import styles from "./styles.module.scss";
const Footer = () => {
  return (
    <Row className={styles.footer}>
      <Col span={6}>
        <div className={styles.aboutView}>
          <img src={Logo} alt="logo" className={styles.logo} />
          <div className={styles.textTitle}>
            Địa chỉ: 319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM
          </div>
          <div className={styles.textTitle}> Số điện thoại: 0126 922 0162</div>
          <div className={styles.textTitle}> Email: demonhunter@gmail.com</div>
          <div className={styles.textTitle}> Skype: mon@mona.media</div>
        </div>
      </Col>
      <Col span={6}>
        <div className={styles.menuView}>
          <div className={styles.title}>MENU</div>
          <div className={styles.subTitle}>Trang chủ </div>
          <div className={styles.subTitle}>Giới thiệu</div>
          <div className={styles.subTitle}> Tin tức</div>
          <div className={styles.subTitle}>Liên hệ</div>
          <div className={styles.subTitle}>Cửa hàng</div>
        </div>
      </Col>
      <Col span={6}>
        <div className={styles.policyView}>
          <div className={styles.policyTitle}> CHÍNH SÁCH</div>
          <div className={styles.policySubTitle}>Chính sách thẻ thành viên</div>
          <div className={styles.policySubTitle}> Hướng dẫn mua hàng</div>
          <div className={styles.policySubTitle}> Chính sách đổi trả</div>
          <div className={styles.policySubTitle}> Hướng dẫn chọn size </div>
          <div className={styles.policySubTitle}> Chính sách bảo hành</div>
        </div>
      </Col>
      <Col span={6}>
        <div className={styles.viewDownLoad}>
          <div className={styles.title}>TẢI ỨNG DỤNG DREAM SHOES NGAY THÔI</div>
          <div className={styles.viewIcon}>
            <img
              className={styles.iconAppsStore}
              alt="dream-shoes"
              src={AppStore}
            />
            <img
              className={styles.googleStore}
              alt="dream-shoes"
              src={GoogleStore}
            />
          </div>
          <img alt="dream-shoes" src={BocoIcon} className={styles.dangky} />
        </div>
      </Col>
    </Row>
  );
};

export default Footer;
