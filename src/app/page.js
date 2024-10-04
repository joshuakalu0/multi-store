import Categories from "@/components/home/Categories";
import DiscountedSales from "@/components/home/DiscountedSales";
import ScrollImage from "@/components/home/ImageIcon";
import SaleYouMAyLike from "@/components/home/SaleMayLike";
import TrendingSales from "@/components/home/TrendingSale";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <ScrollImage />
      <div className="flex flex-col space-y-20">
        <Categories />
        <DiscountedSales />
        <TrendingSales />
        <SaleYouMAyLike />
      </div>

      <div className="h-[150vh]"></div>
    </main>
  );
}
