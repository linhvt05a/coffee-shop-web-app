import ContainerPage from "../../components/ContainerPage";
import PagingPromotion from "../../components/Sliders";
import { PROMOTION_BANNER } from "../../constants/paging_setting";

const HomePage = () => {
  return (
    <ContainerPage
      children={<PagingPromotion dataBanner={PROMOTION_BANNER} />}
    />
  );
};
export default HomePage;
