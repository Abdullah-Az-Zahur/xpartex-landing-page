import Banner from "@/components/Banner/Banner";
import DesignEngineering from "@/components/DesignEngineering/DesignEngineering";
import Header from "@/components/Header/Header";
import Portfolio from "@/components/Portfolio/Portfolio";

export default function Home() {
  return (
    <div>
      <Header />

      {/* first section */}
      <section className="bg-red-100 p-4">
        <Banner />
        <DesignEngineering/>
      </section>

      {/* Portfolio Section */}
      <section className="bg-gray-800 p-4">
        <Portfolio/>
      </section>

    </div>
  );
}
