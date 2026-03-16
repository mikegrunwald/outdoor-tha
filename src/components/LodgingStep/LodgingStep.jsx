"use client";

import { FaSliders, FaSort } from "react-icons/fa6";
import LodgingCard from "@/components/LodgingCard/LodgingCard";
import { getawayPlan } from "@/data/getaway-plan";
import useGetawayStore from "@/store/useGetawayStore";
import styles from "./LodgingStep.module.css";

export default function LodgingStep({ lodgingOptions }) {
	const selectedLodgingId = useGetawayStore((s) => s.selectedLodgingId);
	const selectLodging = useGetawayStore((s) => s.selectLodging);
	const copy = getawayPlan.lodgingStep;

	return (
		<section className={styles.section}>
			<div className={styles.header}>
				<h2>{copy.heading}</h2>
				<div className={styles.controls}>
					<button type="button" className="outline sm">
						<FaSliders /> {copy.filtersButton}
					</button>
					<button type="button" className="outline sm">
						<FaSort /> {copy.sortButton}
					</button>
				</div>
			</div>
			<div className={styles.grid}>
				{lodgingOptions.map((lodge) => (
					<LodgingCard
						key={lodge.id}
						lodge={lodge}
						isSelected={selectedLodgingId === lodge.id}
						onSelect={() => selectLodging(lodge.id)}
					/>
				))}
			</div>
		</section>
	);
}
