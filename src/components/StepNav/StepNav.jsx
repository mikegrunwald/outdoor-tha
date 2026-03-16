import Link from "next/link";
import { Fragment } from "react";
import { getawayPlan } from "@/data/getaway-plan";
import styles from "./StepNav.module.css";

const STEP_KEYS = ["details", "lodging", "activities", "summary"];

export default function StepNav({ currentStep, destinationId }) {
	const { steps } = getawayPlan;

	return (
		<nav className={styles.nav} aria-label="Booking steps">
			{STEP_KEYS.map((key, i) => {
				const step = steps[key];
				const isActive = key === currentStep;
				const stepIndex = STEP_KEYS.indexOf(currentStep);
				const isCompleted = i < stepIndex;

				return (
					<Fragment key={key}>
						{i > 0 && <span className={styles.connector} />}
						<div className={styles.stepItem}>
							<Link
								href={`/getaway-plan/${destinationId}?step=${key}`}
								className={`${styles.step} ${isActive ? styles.active : ""} ${isCompleted ? styles.completed : ""}`}
							>
								<span className={styles.number}>{step.number}</span>
								<span className={styles.label}>{step.label}</span>
							</Link>
						</div>
					</Fragment>
				);
			})}
		</nav>
	);
}
