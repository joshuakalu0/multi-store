import DiscountProductCard from "../global_ui/DiscountCard";

import SectionWrapper from "./SectionWrapper";

const products = [
  {
    name: "Air Purifier ",
    originalPrice: "$220",
    discountPrice: "$180",
    discount: "18%",
    rating: "4.3",
    reviews: "25 reviews",
    image: "/ppc.png",
  },
  {
    name: "Air Purifier",
    originalPrice: "$220",
    discountPrice: "$180",
    discount: "18%",
    rating: "4.3",
    reviews: "25 reviews",
    image: "/ppc.png",
  },
  {
    name: "Air Purifier ",
    originalPrice: "$220",
    discountPrice: "$180",
    discount: "18%",
    rating: "4.3",
    reviews: "25 reviews",
    image: "/ppc.png",
  },
  {
    name: "Air Purifier ",
    originalPrice: "$220",
    discountPrice: "$180",
    discount: "18%",
    rating: "4.3",
    reviews: "25 reviews",
    image: "/ppc.png",
  },
];

export default function DiscountSales() {
  return (
    <SectionWrapper
      header={"Exclusive Discounts"}
      subhead={"Huge Discounts"}
      logo={"/discount.png"}
      description={"Save on our top-selling products"}
    >
      {products.map((product, index) => (
        <DiscountProductCard key={index} product={product} />
      ))}
    </SectionWrapper>
  );
}
