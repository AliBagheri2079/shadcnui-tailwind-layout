import { CardDemo as Card } from "./Card";

import HyundaiGrayImage from "@/components/images/hyundai-gray.jpg";
import HyundaiLightImage from "@/components/images/hyundai-light.jpg";
import HyundaiYellowImage from "@/components/images/hyundai-yellow.jpg";

const ShopCards = () => {
  return (
    <div className="flex items-center justify-between">
      <Card image={HyundaiGrayImage} />
      <Card image={HyundaiLightImage} />
      <Card image={HyundaiYellowImage} />
    </div>
  );
};

export default ShopCards;
