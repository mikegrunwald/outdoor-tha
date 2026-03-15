import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import ActivitySection from "@/components/ActivitySection/ActivitySection";
import Footer from "@/components/Footer/Footer";
import { fishing, skiing, hikingTrekking } from "@/data/explore";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ActivitySection {...fishing} />
        <ActivitySection {...skiing} />
        <ActivitySection {...hikingTrekking} />
      </main>
      <Footer />
    </>
  );
}
