import Banner from "@/components/Banner/Banner";
import BrandValues from "@/components/BrandValues/BrandValues";
import Construction from "@/components/Construction/Construction";
import Contact from "@/components/Contact/Contact";
import Crafting from "@/components/Crafting/Crafting";
import Header from "@/components/Header/Header";
import MockUp from "@/components/MockUp/MockUp";
import Portfolio from "@/components/Portfolio/Portfolio";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";

export default function Home() {
  return (
    <div className="bg-red-100">
      <Header />
      <Banner />
      <Portfolio />
      <BrandValues />
      <Construction />
      <WhatWeDo />
      <MockUp />
      <Crafting />
      <Contact/>
    </div>
  );
}
