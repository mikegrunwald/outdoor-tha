"use client";

import { useEffect } from "react";
import { getawayPlan } from "@/data/getaway-plan";
import useGetawayStore from "@/store/useGetawayStore";
import styles from "./TripDetailsStep.module.css";

export default function TripDetailsStep({ destinationId }) {
	const { dates, guests, setDates, setGuests, setDestination } =
		useGetawayStore();
	const copy = getawayPlan.tripDetails;

	// Sync destination on mount
	useEffect(() => {
		const currentDest = useGetawayStore.getState().destinationId;
		if (currentDest !== destinationId) {
			setDestination(destinationId);
		}
	}, [destinationId, setDestination]);

	return (
		<div className={styles.form}>
			<div className={styles.row}>
				<div className={styles.field}>
					<label htmlFor="checkIn" className={styles.label}>{copy.arrivalLabel}</label>
						<input
							id="checkIn"
							name="checkIn"
							type="date"
							value={dates.checkIn}
							onChange={(e) => setDates({ ...dates, checkIn: e.target.value })}
							className={styles.dateInput}
						/>
				</div>
				<div className={styles.field}>
					<label htmlFor="checkOut" className={styles.label}>{copy.departureLabel}</label>
						<input
							id="checkOut"
							name="checkOut"
							type="date"
							value={dates.checkOut}
							onChange={(e) => setDates({ ...dates, checkOut: e.target.value })}
							className={styles.dateInput}
						/>
				</div>
				<div className={styles.field}>
					<span id="adults-label" className={styles.label}>{copy.adultsLabel}</span>
					<fieldset aria-labelledby="adults-label" className={styles.counter}>
						<button
							type="button"
							className={styles.counterBtn}
							onClick={() =>
								setGuests({
									...guests,
									adults: Math.max(1, guests.adults - 1),
								})
							}
							aria-label="Decrease adults"
						>
							{"\u2212"}
						</button>
						<span aria-live="polite" aria-atomic="true" className={styles.counterValue}>{guests.adults}</span>
						<button
							type="button"
							className={styles.counterBtn}
							onClick={() =>
								setGuests({ ...guests, adults: guests.adults + 1 })
							}
							aria-label="Increase adults"
						>
							+
						</button>
					</fieldset>
				</div>
				<div className={styles.field}>
					<span id="children-label" className={styles.label}>{copy.childrenLabel}</span>
					<fieldset aria-labelledby="children-label" className={styles.counter}>
						<button
							type="button"
							className={styles.counterBtn}
							onClick={() =>
								setGuests({
									...guests,
									children: Math.max(0, guests.children - 1),
								})
							}
							aria-label="Decrease children"
						>
							{"\u2212"}
						</button>
						<span aria-live="polite" aria-atomic="true" className={styles.counterValue}>{guests.children}</span>
						<button
							type="button"
							className={styles.counterBtn}
							onClick={() =>
								setGuests({ ...guests, children: guests.children + 1 })
							}
							aria-label="Increase children"
						>
							+
						</button>
					</fieldset>
				</div>
			</div>
		</div>
	);
}
