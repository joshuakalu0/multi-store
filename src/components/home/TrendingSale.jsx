import ProductCard from "../global_ui/ProductCard";
import ProductWrapper from "./ProductWrapper";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 21, 13, 14, 15, 16, 17, 18];
export default function TrendingSales() {
  return (
    <ProductWrapper title={"Featured"}>
      {data.map((i, ii) => (
        <ProductCard key={ii} />
      ))}
    </ProductWrapper>
  );
}
