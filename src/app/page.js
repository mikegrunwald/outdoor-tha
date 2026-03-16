import ActivitySection from "@/components/ActivitySection/ActivitySection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import { fishing, hikingTrekking, skiing } from "@/data/explore";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <div id="activities">
          <ActivitySection {...fishing} />
          <ActivitySection {...skiing} />
          <ActivitySection {...hikingTrekking} />
        </div>
      </main>
      <Footer />
    </>
  );
}
