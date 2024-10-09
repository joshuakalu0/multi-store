import PromoSection from "@/components/home/Cover";
import TrendingSales from "@/components/home/TrendingSale";
import CategorySection from "@/components/home/Categories";
import DiscountSales from "@/components/home/DiscountedSales";
import SaleMayLike from "@/components/home/SaleMayLike";

export default function Home() {
  return (
    <main className="mt-20">
      <PromoSection />
      <div className="flex flex-col mt-10 space-y-3">
        <CategorySection />

        <DiscountSales />
        <TrendingSales />
        <SaleMayLike />
      </div>
    </main>
  );
}
