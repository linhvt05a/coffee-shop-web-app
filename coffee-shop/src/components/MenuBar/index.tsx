import { Col, Row } from "antd";
import { useNavigate } from "react-router";
import { HEADER_MENU } from "../../constants/header_menu";
import { Logo } from "../../constants/icons";
import { HeaderProps } from "../../interface/header_interface";
import NavItems from "../NavItems";
import styles from "./styles.module.scss";

const MenuBar = () => {
  const navigate = useNavigate();
  const onClickMainNav = (path: string) => {
    navigate(path);
  };
  const onClickLogo = () => {
    navigate("/");
  };
  return (
    <Row className={styles.container}>
      <Col span={6}>
        <div className={styles.logoContainer} onClick={onClickLogo}>
          <img src={Logo} alt="logo" className={styles.logo} />
        </div>
      </Col>
      <Col span={18} className={styles.navContainer}>
        <div className={styles.navBar}>
          {HEADER_MENU.map((mainNav: HeaderProps) => (
            <NavItems
              title={mainNav.title}
              onClickNav={() => onClickMainNav(mainNav.paths)}
            />
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default MenuBar;
