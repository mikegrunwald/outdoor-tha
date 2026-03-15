import Image from "next/image";
import ActivityCard from "@/components/ActivityCard/ActivityCard";
import styles from "./ActivitySection.module.css";

const ICON_MAP = {
  Fishing: "/images/icon-fishing.svg",
  Skiing: "/images/icon-skiing.svg",
  "Hiking & Trekking": "/images/icon-hiking.svg",
};

export default function ActivitySection({ title, viewAll, cards }) {
  const icon = ICON_MAP[title];

  return (
    <section className={styles.section}>
    <div className={styles.inner}>

      <div className={styles.header}>
        <div className={styles.titleGroup}>
          {icon && (
            <span className={styles.iconWrap} style={{ width: 20, height: 20 }}>
              <Image
                src={icon}
                alt=""
                width={20}
                height={20}
                aria-hidden="true"
              />
            </span>
          )}
          <h2>{title}</h2>
        </div>
        <a href={`#${title.toLowerCase()}`} className={styles.viewAll}>
          {viewAll}
          <span className={styles.iconWrap} style={{ width: 10, height: 10 }}>
            <Image
              src="/images/icon-chevron-right.svg"
              alt=""
              width={10}
              height={10}
              aria-hidden="true"
            />
          </span>
        </a>
      </div>
      <div className={styles.grid}>
        {cards.map((card) => (
          <ActivityCard key={card.title} {...card} />
        ))}
      </div>
    </div>

    </section>
  );
}
