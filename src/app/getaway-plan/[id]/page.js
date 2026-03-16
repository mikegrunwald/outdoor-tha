import dynamic from "next/dynamic";
import { getDestinationById } from "@/data/destinations";
import { getLodgingByIds } from "@/data/lodging";
import { getActivitiesByIds } from "@/data/activities";
import { getawayPlan } from "@/data/getaway-plan";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import StepNav from "@/components/StepNav/StepNav";
import Link from "next/link";
import styles from "./page.module.css";

const TripDetailsStep = dynamic(() => import("@/components/TripDetailsStep/TripDetailsStep"));
const LodgingStep = dynamic(() => import("@/components/LodgingStep/LodgingStep"));
const ActivitiesStep = dynamic(() => import("@/components/ActivitiesStep/ActivitiesStep"));
const SummaryStep = dynamic(() => import("@/components/SummaryStep/SummaryStep"));
const Cart = dynamic(() => import("@/components/Cart/Cart"));

export async function generateMetadata({ params }) {
  const { id } = await params;
  const destination = getDestinationById(id);
  if (!destination) return { title: "Destination Not Found — Roam & Board" };
  return {
    title: `${destination.title} — Roam & Board`,
    description: destination.description,
  };
}

export default async function GetawayPlanPage({ params, searchParams }) {
  const { id } = await params;
  const { step = "details" } = await searchParams;
  const destination = getDestinationById(id);

  if (!destination) {
    return (
      <>
        <Header />
        <main className={styles.wrapper}>
          <div className={styles.notFound}>
            <h1>Destination not found</h1>
            <Link href="/" role="button">
              {getawayPlan.comingSoon.backButton}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (destination.comingSoon) {
    return (
      <>
        <Header />
        <main className={styles.wrapper}>
          <div className={styles.comingSoon}>
            <h1>{getawayPlan.comingSoon.heading}</h1>
            <p>{getawayPlan.comingSoon.message}</p>
            <Link href="/" role="button">
              {getawayPlan.comingSoon.backButton}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const lodgingOptions = getLodgingByIds(destination.lodgingIds);
  const activityOptions = getActivitiesByIds(destination.activityIds);
  const showTripForm = step === "details" || step === "lodging";
  const showLodging = step === "details" || step === "lodging";

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.main}>
            <StepNav currentStep={step} destinationId={id} />
            <h1 className={styles.pageHeading}>{getawayPlan.pageTitle}</h1>
            {showTripForm && (
              <TripDetailsStep destinationId={id} />
            )}
            {showLodging && (
              <LodgingStep lodgingOptions={lodgingOptions} />
            )}
            {step === "activities" && (
              <ActivitiesStep activityOptions={activityOptions} />
            )}
            {step === "summary" && (
              <SummaryStep
                destination={destination}
                lodgingOptions={lodgingOptions}
                activityOptions={activityOptions}
              />
            )}
          </div>
          <aside className={styles.sidebar}>
            <Cart destination={destination} />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
