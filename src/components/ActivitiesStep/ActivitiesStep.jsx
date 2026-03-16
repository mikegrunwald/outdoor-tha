"use client";

import Image from "next/image";
import useGetawayStore from "@/store/useGetawayStore";
import { getawayPlan } from "@/data/getaway-plan";
import styles from "./ActivitiesStep.module.css";

export default function ActivitiesStep({ activityOptions }) {
  const { selectedActivityIds, toggleActivity } = useGetawayStore();
  const copy = getawayPlan.activitiesStep;

  return (
    <section className={styles.section}>
      <h2>{copy.heading}</h2>
      <div className={styles.grid}>
        {activityOptions.map((activity) => {
          const isAdded = selectedActivityIds.includes(activity.id);
          return (
            <article
              key={activity.id}
              className={`${styles.card} ${isAdded ? styles.selected : ""}`}
              onClick={() => toggleActivity(activity.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleActivity(activity.id);
                }
              }}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  sizes="(max-width: 48rem) 100vw, 25vw"
                  className={styles.image}
                />
                {isAdded && (
                  <span className={styles.badge}>Added</span>
                )}
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{activity.title}</h3>
                <p className={styles.description}>{activity.description}</p>
                <div className={styles.meta}>
                  <span>{activity.duration}</span>
                </div>
                <div className={styles.footer}>
                  <div className={styles.price}>
                    <span className={styles.priceValue}>
                      ${activity.pricePerPerson}
                    </span>
                    <span className={styles.priceUnit}>{copy.perPerson}</span>
                  </div>
                  <button
                    type="button"
                    className={isAdded ? styles.addedBtn : styles.addBtn}
                  >
                    {isAdded ? copy.addedButton : copy.addButton}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
