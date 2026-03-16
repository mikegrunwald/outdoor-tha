"use client";

import Image from "next/image";
import {
  FaCartShopping,
  FaCheck,
  FaPlus,
  FaRegCalendar,
  FaUsers,
} from "react-icons/fa6";
import { getawayPlan } from "@/data/getaway-plan";
import { getLodgingById } from "@/data/lodging";
import {
  computeTotal,
  getNights,
  getRecommendedAddOns,
  getRecommendedBundles,
} from "@/lib/recommendations";
import useGetawayStore from "@/store/useGetawayStore";
import styles from "./Cart.module.css";

export default function Cart({ destination }) {
	const {
		dates,
		guests,
		selectedLodgingId,
		selectedActivityIds,
		selectedAddOnIds,
		selectedBundleId,
		toggleAddOn,
		selectBundle,
	} = useGetawayStore();

	const copy = getawayPlan.cart;
	const nights = getNights(dates.checkIn, dates.checkOut);
	const guestCount = guests.adults + guests.children;

	const selectedLodging = selectedLodgingId
		? getLodgingById(selectedLodgingId)
		: null;

	const recommendedAddOns = getRecommendedAddOns(selectedLodgingId).filter(
		(addon) => !selectedAddOnIds.includes(addon.id),
	);

	const recommendedBundles = getRecommendedBundles({
		activityType: destination.activityType,
		selectedActivityIds,
		guests,
	});

	const { lineItems, total } = computeTotal({
		selectedLodgingId,
		selectedActivityIds,
		selectedAddOnIds,
		selectedBundleId,
		nights: nights || 1,
		guestCount: guestCount || 1,
	});

	const hasSelections = selectedLodgingId || selectedActivityIds.length > 0;

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
		<div className={styles.cart}>
			<div className={styles.header}>
				<div>
					<h2 className={styles.heading}>{copy.heading}</h2>
					<p className={styles.subtitle}>{copy.subtitle}</p>
				</div>
				<span className={styles.cartIcon}>
					<FaCartShopping />
				</span>
			</div>

			{/* Trip summary */}
			<div className={styles.tripSummary}>
				<div className={styles.summaryRow}>
					<span className={styles.summaryIcon}>
						<FaRegCalendar />
					</span>
					<span>
						{formatDate(dates.checkIn)} - {formatDate(dates.checkOut)}
					</span>
				</div>
				<div className={styles.summaryRow}>
					<span className={styles.summaryIcon}>
						<FaUsers />
					</span>
					<span>
						{guests.adults} Adult{guests.adults !== 1 ? "s" : ""}
						{guests.children > 0 &&
							`, ${guests.children} Child${guests.children !== 1 ? "ren" : ""}`}
					</span>
				</div>
			</div>

			{/* Recommended bundles/add-ons */}
			{(recommendedBundles.length > 0 || recommendedAddOns.length > 0) &&
				hasSelections && (
					<div className={styles.recommended}>
						<h3 className={styles.sectionLabel}>{copy.recommendedHeading}</h3>
						{recommendedBundles.map((bundle) => (
							<div
								key={bundle.id}
								className={`${styles.recommendedItem} ${selectedBundleId === bundle.id ? styles.recommendedSelected : ""}`}
							>
								<div className={styles.recommendedImage}>
									<Image
										src={bundle.image}
										alt={bundle.title}
										fill
										sizes="48px"
										style={{ objectFit: "cover" }}
									/>
								</div>
								<div className={styles.recommendedInfo}>
									<span className={styles.recommendedTitle}>
										{bundle.title}
									</span>
									<span className={styles.recommendedDesc}>
										{bundle.description}
									</span>
								</div>
								<button
									type="button"
									className={styles.addCircle}
									onClick={() => selectBundle(bundle.id)}
									aria-label={`Add ${bundle.title}`}
								>
									{selectedBundleId === bundle.id ? <FaCheck /> : <FaPlus />}
								</button>
							</div>
						))}
						{recommendedAddOns.map((addon) => (
							<div key={addon.id} className={styles.recommendedItem}>
								<div className={styles.recommendedInfo}>
									<span className={styles.recommendedTitle}>{addon.title}</span>
									<span className={styles.recommendedDesc}>
										${addon.price} {addon.perUnit}
									</span>
								</div>
								<button
									type="button"
									className={styles.addCircle}
									onClick={() => toggleAddOn(addon.id)}
									aria-label={`Add ${addon.title}`}
								>
									<FaPlus />
								</button>
							</div>
						))}
					</div>
				)}

			{/* Line items */}
			{hasSelections && (
				<div className={styles.lineItems}>
					<h3 className={styles.sectionLabel}>{copy.lineItemsHeading}</h3>
					{lineItems.map((item, i) => (
						<div key={i} className={styles.lineItem}>
							<span>{item.label}</span>
							<span className={item.amount < 0 ? styles.discount : ""}>
								{item.amount < 0 ? "-" : ""}$
								{Math.abs(item.amount).toLocaleString()}
							</span>
						</div>
					))}
				</div>
			)}

			{/* Total */}
			{hasSelections && (
				<div className={styles.totalRow}>
					<span className={styles.totalLabel}>{copy.totalLabel}</span>
					<span className={styles.totalValue}>${total.toLocaleString()}</span>
				</div>
			)}

			{/* Empty state */}
			{!hasSelections && <p className={styles.empty}>{copy.emptyMessage}</p>}

			{/* Checkout */}
			<button type="button" className={styles.checkoutBtn}>
				{copy.checkoutButton} {"\u2192"}
			</button>
		</div>
	);
}
