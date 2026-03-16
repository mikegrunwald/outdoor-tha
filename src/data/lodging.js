export const lodging = {
  // Lake Tahoe, CA — Fishing
  "tahoe-lakeside-cabin": {
    id: "tahoe-lakeside-cabin",
    title: "Lakeside Cabin",
    description:
      "Rustic cabin with private dock access and panoramic lake views. Wood-burning fireplace and fully equipped kitchen.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&q=80",
    pricePerNight: 195,
    sleeps: 4,
    bedrooms: 2,
    rating: 4.9,
    badge: "Best Seller",
    recommendedAddOnIds: ["fishing-gear-rental", "breakfast-basket", "kayak-rental"],
  },
  "tahoe-pine-lodge": {
    id: "tahoe-pine-lodge",
    title: "The Pine Lodge",
    description:
      "Sustainable architecture meets luxury. Perfect for couples or small groups seeking a modern mountain retreat.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80",
    pricePerNight: 165,
    sleeps: 3,
    bedrooms: 1,
    rating: 4.8,
    recommendedAddOnIds: ["fishing-gear-rental", "breakfast-basket"],
  },
  "tahoe-glamping": {
    id: "tahoe-glamping",
    title: "Lakefront Glamping",
    description:
      "Canvas luxury tent steps from the water. Fall asleep to lapping waves under a canopy of stars.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
    pricePerNight: 120,
    sleeps: 2,
    bedrooms: 1,
    rating: 4.6,
    recommendedAddOnIds: ["fishing-gear-rental", "campfire-kit"],
  },

  // Aspen, CO — Skiing
  "aspen-alpine-loft": {
    id: "aspen-alpine-loft",
    title: "Alpine Vista Loft",
    description:
      "A cozy wood-paneled retreat with panoramic mountain views. Ski-in/ski-out access to Aspen Mountain.",
    image: "https://images.unsplash.com/photo-1520984032042-162d526883e0?w=800&q=80",
    pricePerNight: 180,
    sleeps: 4,
    bedrooms: 2,
    rating: 4.9,
    badge: "Best Seller",
    recommendedAddOnIds: ["ski-equipment-rental", "hot-tub-access", "breakfast-basket"],
  },
  "aspen-pine-retreat": {
    id: "aspen-pine-retreat",
    title: "The Pine Retreat",
    description:
      "Sustainable architecture meets luxury. Perfect for couples or small groups with a private hot tub.",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&q=80",
    pricePerNight: 180,
    sleeps: 3,
    bedrooms: 1,
    rating: 4.8,
    recommendedAddOnIds: ["ski-equipment-rental", "hot-tub-access"],
  },
  "aspen-summit-chalet": {
    id: "aspen-summit-chalet",
    title: "Summit Chalet",
    description:
      "Spacious luxury chalet with private spa and ski-in/ski-out access. Ideal for families and groups.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
    pricePerNight: 420,
    sleeps: 8,
    bedrooms: 4,
    rating: 5.0,
    recommendedAddOnIds: [
      "ski-equipment-rental",
      "hot-tub-access",
      "kids-ski-camp",
      "breakfast-basket",
    ],
  },

  // Zion, UT — Hiking
  "zion-canyon-lodge": {
    id: "zion-canyon-lodge",
    title: "Canyon View Lodge",
    description:
      "Modern lodge with floor-to-ceiling windows framing red rock canyon walls. Minutes from the Zion shuttle.",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80",
    pricePerNight: 210,
    sleeps: 4,
    bedrooms: 2,
    rating: 4.9,
    badge: "Best Seller",
    recommendedAddOnIds: ["hiking-gear-rental", "packed-lunch", "breakfast-basket"],
  },
  "zion-glamping-tent": {
    id: "zion-glamping-tent",
    title: "Desert Sky Glamping",
    description:
      "Luxury safari tent on the canyon rim. Private deck for stargazing and morning coffee with a view.",
    image: "https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=800&q=80",
    pricePerNight: 145,
    sleeps: 2,
    bedrooms: 1,
    rating: 4.7,
    recommendedAddOnIds: ["hiking-gear-rental", "campfire-kit", "stargazing-kit"],
  },
  "zion-desert-casita": {
    id: "zion-desert-casita",
    title: "Desert Casita",
    description:
      "Adobe-inspired casita with private courtyard and outdoor shower. A peaceful desert escape.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    pricePerNight: 175,
    sleeps: 3,
    bedrooms: 1,
    rating: 4.8,
    recommendedAddOnIds: ["hiking-gear-rental", "packed-lunch"],
  },
};

export function getLodgingById(id) {
  return lodging[id] || null;
}

export function getLodgingByIds(ids) {
  if (!ids) return [];
  return ids.map((id) => lodging[id]).filter(Boolean);
}
