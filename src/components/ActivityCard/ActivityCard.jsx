import Image from "next/image";
import styles from "./ActivityCard.module.css";

export default function ActivityCard({ title, description, image, badge, badgeVariant }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 48rem) 100vw, 33vw"
          className={styles.image}
        />
        {badge && (
          <span
            className={`${styles.badge} ${badgeVariant === "solid" ? styles.badgeSolid : ""}`}
          >
            {badge}
          </span>
        )}
      </div>
      <div className={styles.body}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
