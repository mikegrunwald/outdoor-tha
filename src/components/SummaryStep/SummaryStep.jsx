"use client";

import useGetawayStore from "@/store/useGetawayStore";
import { getawayPlan } from "@/data/getaway-plan";
import { getLodgingById } from "@/data/lodging";
import { getActivityById } from "@/data/activities";
import { getAddonById } from "@/data/addons";
import { getBundleById } from "@/data/bundles";
import { getNights, computeTotal } from "@/lib/recommendations";
import styles from "./SummaryStep.module.css";

export default function SummaryStep({ destination }) {
  const dates = useGetawayStore((s) => s.dates);
  const guests = useGetawayStore((s) => s.guests);
  const selectedLodgingId = useGetawayStore((s) => s.selectedLodgingId);
  const selectedActivityIds = useGetawayStore((s) => s.selectedActivityIds);
  const selectedAddOnIds = useGetawayStore((s) => s.selectedAddOnIds);
  const selectedBundleId = useGetawayStore((s) => s.selectedBundleId);

  const copy = getawayPlan.summaryStep;
  const nights = getNights(dates.checkIn, dates.checkOut);
  const guestCount = guests.adults + guests.children;

  const selectedLodging = selectedLodgingId
    ? getLodgingById(selectedLodgingId)
    : null;

  const selectedActivities = selectedActivityIds
    .map((id) => getActivityById(id))
    .filter(Boolean);

  const selectedAddOns = selectedAddOnIds
    .map((id) => getAddonById(id))
    .filter(Boolean);

  const selectedBundle = selectedBundleId
    ? getBundleById(selectedBundleId)
    : null;

  const { total } = computeTotal({
    selectedLodgingId,
    selectedActivityIds,
    selectedAddOnIds,
    selectedBundleId,
    nights: nights || 1,
    guestCount: guestCount || 1,
  });

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section className={styles.section}>
      <h2>{copy.heading}</h2>

      <div className={styles.card}>
        <h3>{copy.tripDetailsLabel}</h3>
        <div className={styles.detail}>
          <span className={styles.label}>Destination</span>
          <span>{destination.title}</span>
        </div>
        <div className={styles.detail}>
          <span className={styles.label}>Dates</span>
          <span>
            {formatDate(dates.checkIn)} – {formatDate(dates.checkOut)}{" "}
            ({nights} night{nights !== 1 ? "s" : ""})
          </span>
        </div>
        <div className={styles.detail}>
          <span className={styles.label}>Guests</span>
          <span>
            {guests.adults} Adult{guests.adults !== 1 ? "s" : ""}
            {guests.children > 0 &&
              `, ${guests.children} Child${guests.children !== 1 ? "ren" : ""}`}
          </span>
        </div>
      </div>

      {selectedLodging && (
        <div className={styles.card}>
          <h3>{copy.lodgingLabel}</h3>
          <div className={styles.detail}>
            <span>{selectedLodging.title}</span>
            <span>
              ${selectedLodging.pricePerNight} × {nights || 1} night
              {(nights || 1) !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      )}

      {selectedActivities.length > 0 && (
        <div className={styles.card}>
          <h3>{copy.activitiesLabel}</h3>
          {selectedActivities.map((a) => (
            <div key={a.id} className={styles.detail}>
              <span>{a.title}</span>
              <span>
                ${a.pricePerPerson} × {guestCount || 1} guest
                {(guestCount || 1) !== 1 ? "s" : ""}
              </span>
            </div>
          ))}
        </div>
      )}

      {(selectedAddOns.length > 0 || selectedBundle) && (
        <div className={styles.card}>
          <h3>{copy.addOnsLabel}</h3>
          {selectedAddOns.map((a) => (
            <div key={a.id} className={styles.detail}>
              <span>{a.title}</span>
              <span>${a.price}</span>
            </div>
          ))}
          {selectedBundle && (
            <div className={styles.detail}>
              <span>{selectedBundle.title} (–{selectedBundle.discount * 100}%)</span>
              <span className={styles.discount}>Applied</span>
            </div>
          )}
        </div>
      )}

      <div className={styles.totalCard}>
        <span className={styles.totalLabel}>Estimated Total</span>
        <span className={styles.totalValue}>${total.toLocaleString()}</span>
      </div>
    </section>
  );
}
