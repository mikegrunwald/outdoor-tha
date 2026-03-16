import Image from "next/image";
import { hero } from "@/data/explore";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/hero-bg.jpg"
        alt="Outdoor mountain landscape"
        fill
        priority
        className={styles.bgImage}
        sizes="100vw"
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className="display">{hero.heading}</h1>
        <p className={styles.subheading}>{hero.subheading}</p>
        <a href="#activities" type="button" className="lg">{hero.cta}</a>
      </div>
    </section>
  );
}
