export const addons = {
  // Fishing add-ons
  "fishing-gear-rental": {
    id: "fishing-gear-rental",
    title: "Fishing Gear Rental",
    description: "Full rod, reel, and tackle setup for your trip.",
    price: 45,
    perUnit: "per day",
  },
  "kayak-rental": {
    id: "kayak-rental",
    title: "Kayak Rental",
    description: "Single or tandem kayak for lake exploration.",
    price: 65,
    perUnit: "per day",
  },

  // Skiing add-ons
  "ski-equipment-rental": {
    id: "ski-equipment-rental",
    title: "Ski Equipment Rental",
    description: "Skis, boots, poles, and helmet — fitted by experts.",
    price: 75,
    perUnit: "per day",
  },
  "hot-tub-access": {
    id: "hot-tub-access",
    title: "Private Hot Tub",
    description: "Exclusive hot tub access after a day on the slopes.",
    price: 40,
    perUnit: "per night",
  },
  "kids-ski-camp": {
    id: "kids-ski-camp",
    title: "Kids Ski Camp",
    description: "Full-day supervised ski school for ages 4-12.",
    price: 120,
    perUnit: "per child per day",
  },

  // Hiking add-ons
  "hiking-gear-rental": {
    id: "hiking-gear-rental",
    title: "Hiking Gear Rental",
    description: "Trekking poles, daypack, and hydration system.",
    price: 30,
    perUnit: "per day",
  },
  "packed-lunch": {
    id: "packed-lunch",
    title: "Trail Lunch Pack",
    description: "Gourmet packed lunch with local ingredients.",
    price: 25,
    perUnit: "per person",
  },
  "stargazing-kit": {
    id: "stargazing-kit",
    title: "Stargazing Kit",
    description: "Binoculars, star chart, and blanket for night sky viewing.",
    price: 20,
    perUnit: "per stay",
  },

  // Shared add-ons
  "breakfast-basket": {
    id: "breakfast-basket",
    title: "Breakfast Basket",
    description: "Locally sourced morning provisions delivered to your door.",
    price: 35,
    perUnit: "per stay",
  },
  "campfire-kit": {
    id: "campfire-kit",
    title: "Campfire Kit",
    description: "Firewood, s'mores fixings, and fire starters.",
    price: 25,
    perUnit: "per stay",
  },
};

export function getAddonById(id) {
  return addons[id] || null;
}

export function getAddonsByIds(ids) {
  if (!ids) return [];
  return ids.map((id) => addons[id]).filter(Boolean);
}
