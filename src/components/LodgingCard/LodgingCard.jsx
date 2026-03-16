"use client";

import Image from "next/image";
import { FaStar, FaUsers, FaBed } from "react-icons/fa6";
import { getawayPlan } from "@/data/getaway-plan";
import styles from "./LodgingCard.module.css";

export default function LodgingCard({ lodge, isSelected, onSelect }) {
  const copy = getawayPlan.lodgingStep;

  return (
    <article
      className={`${styles.card} ${isSelected ? styles.selected : ""}`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
    >
      <div className={styles.imageWrap}>
        <Image
          src={lodge.image}
          alt={lodge.title}
          fill
          sizes="(max-width: 48rem) 100vw, 33vw"
          className={styles.image}
        />
        {(lodge.badge || isSelected) && (
          <span className={styles.badge}>
            {isSelected ? "Selected" : lodge.badge}
          </span>
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{lodge.title}</h3>
          <span className={styles.rating}><FaStar /> {lodge.rating}</span>
        </div>
        <p className={styles.description}>{lodge.description}</p>
        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <FaUsers /> {copy.sleepsLabel} {lodge.sleeps}
          </span>
          <span className={styles.metaItem}>
            <FaBed /> {lodge.bedrooms} {copy.bedroomsLabel}
          </span>
        </div>
        <div className={styles.footer}>
          <div className={styles.price}>
            <span className={styles.priceValue}>
              ${lodge.pricePerNight}
            </span>
            <span className={styles.priceUnit}>{copy.perNight}</span>
          </div>
          <button
            type="button"
            className={`${isSelected ? styles.selectedBtn : styles.selectBtn} small`}
          >
            {isSelected ? copy.selectedButton : copy.selectButton}
          </button>
        </div>
      </div>
    </article>
  );
}
