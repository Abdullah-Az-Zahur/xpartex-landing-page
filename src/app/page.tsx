import Banner from "@/components/Banner/Banner";
import DesignEngineering from "@/components/DesignEngineering/DesignEngineering";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div>
      <Header />

      {/* first section */}
      <section className="bg-red-100 p-4">
        <Banner />
        <DesignEngineering/>
      </section>
    </div>
  );
}
