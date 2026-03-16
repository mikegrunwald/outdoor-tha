import { lodging } from "@/data/lodging";
import { addons } from "@/data/addons";
import { bundles } from "@/data/bundles";
import { activities } from "@/data/activities";

export function getRecommendedAddOns(selectedLodgingId) {
  if (!selectedLodgingId) return [];
  const lodge = lodging[selectedLodgingId];
  if (!lodge?.recommendedAddOnIds) return [];
  return lodge.recommendedAddOnIds.map((id) => addons[id]).filter(Boolean);
}

export function getRecommendedBundles({
  activityType,
  selectedActivityIds = [],
  guests = { adults: 2, children: 0 },
}) {
  return bundles.filter((bundle) => {
    const rule = bundle.matchRule;
    if (rule.activityType && rule.activityType !== activityType) return false;
    if (
      rule.requiresActivityCount &&
      selectedActivityIds.length < rule.requiresActivityCount
    )
      return false;
    if (rule.hasChildren && guests.children === 0) return false;
    return true;
  });
}

export function computeTotal({
  selectedLodgingId,
  selectedActivityIds = [],
  selectedAddOnIds = [],
  selectedBundleId,
  nights = 1,
  guestCount = 1,
}) {
  let total = 0;
  const lineItems = [];

  // Lodging
  if (selectedLodgingId) {
    const lodge = lodging[selectedLodgingId];
    if (lodge) {
      const lodgingCost = lodge.pricePerNight * nights;
      lineItems.push({
        label: `${lodge.title} (${nights} night${nights !== 1 ? "s" : ""})`,
        amount: lodgingCost,
      });
      total += lodgingCost;
    }
  }

  // Activities
  for (const actId of selectedActivityIds) {
    const activity = activities[actId];
    if (activity) {
      const actCost = activity.pricePerPerson * guestCount;
      lineItems.push({
        label: activity.title,
        amount: actCost,
      });
      total += actCost;
    }
  }

  // Add-ons
  for (const addOnId of selectedAddOnIds) {
    const addon = addons[addOnId];
    if (addon) {
      lineItems.push({
        label: addon.title,
        amount: addon.price,
      });
      total += addon.price;
    }
  }

  // Service fee (5% of subtotal)
  const serviceFee = Math.round(total * 0.05);
  lineItems.push({ label: "Service Fee", amount: serviceFee });
  total += serviceFee;

  // Taxes (9% of subtotal before service fee)
  const taxes = Math.round((total - serviceFee) * 0.09);
  lineItems.push({ label: "Taxes", amount: taxes });
  total += taxes;

  // Bundle discount
  let discount = 0;
  if (selectedBundleId) {
    const bundle = bundles.find((b) => b.id === selectedBundleId);
    if (bundle) {
      discount = Math.round(total * bundle.discount);
      lineItems.push({
        label: `${bundle.title} Discount`,
        amount: -discount,
      });
      total -= discount;
    }
  }

  return { lineItems, total };
}

export function getNights(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 0;
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diff = end - start;
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}
