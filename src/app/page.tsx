import Banner from "@/components/Banner/Banner";
import BrandValues from "@/components/BrandValues/BrandValues";
import Header from "@/components/Header/Header";
import Portfolio from "@/components/Portfolio/Portfolio";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Portfolio />
      <BrandValues/>
    </div>
  );
}
