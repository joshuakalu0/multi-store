import ProductCard from "../global_ui/ProductCard";
import SectionWrapper from "./SectionWrapper";

const products = [
  {
    name: "dell E6430 i7",
    price: "$250",
    rating: "5.0",
    reviews: "10 reviews",
    image: "/ppc.png",
  },
  {
    name: "dell E6430 i7",
    price: "$250",
    rating: "5.0",
    reviews: "10 reviews",
    image: "/ppc.png",
  },
  {
    name: "dell E6430 i7",
    price: "$250",
    rating: "5.0",
    reviews: "10 reviews",
    image: "/ppc.png",
  },
];
export default function TrendingSales() {
  return (
    <SectionWrapper
      header={"Featured"}
      subhead={"Trend Products"}
      logo={"/trending.png"}
      description={"Check out the hottest products"}
    >
      <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
