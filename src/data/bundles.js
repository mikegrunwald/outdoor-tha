export const bundles = [
  // Fishing bundles
  {
    id: "angler-weekend",
    title: "Angler Weekend Package",
    description: "Guided trip + gear rental + breakfast basket",
    image: "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=400&q=80",
    discount: 0.15,
    includedAddOnIds: ["fishing-gear-rental", "breakfast-basket"],
    matchRule: {
      activityType: "fishing",
      requiresActivityCount: 2,
    },
  },
  {
    id: "family-fishing",
    title: "Family Fishing Fun",
    description: "Kid-friendly guided experience + kayak rental + campfire kit",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80",
    discount: 0.1,
    includedAddOnIds: ["kayak-rental", "campfire-kit"],
    matchRule: {
      activityType: "fishing",
      hasChildren: true,
    },
  },

  // Skiing bundles
  {
    id: "ski-pass-bundle",
    title: "Ski Pass Bundle",
    description: "Equipment + 3 Day Pass",
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=400&q=80",
    discount: 0.2,
    includedAddOnIds: ["ski-equipment-rental"],
    matchRule: {
      activityType: "skiing",
      requiresActivityCount: 1,
    },
  },
  {
    id: "family-ski",
    title: "Family Ski Package",
    description: "Kids ski camp + equipment rental + hot tub access",
    image: "https://images.unsplash.com/photo-1565992441121-4367c2967103?w=400&q=80",
    discount: 0.15,
    includedAddOnIds: ["kids-ski-camp", "ski-equipment-rental", "hot-tub-access"],
    matchRule: {
      activityType: "skiing",
      hasChildren: true,
    },
  },

  // Hiking bundles
  {
    id: "explorer-pack",
    title: "Explorer Pack",
    description: "Gear rental + trail lunch + guided hike discount",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80",
    discount: 0.15,
    includedAddOnIds: ["hiking-gear-rental", "packed-lunch"],
    matchRule: {
      activityType: "hiking",
      requiresActivityCount: 2,
    },
  },
  {
    id: "family-adventure",
    title: "Family Adventure Package",
    description: "Horseback ride + stargazing + campfire kit",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&q=80",
    discount: 0.1,
    includedAddOnIds: ["campfire-kit", "stargazing-kit"],
    matchRule: {
      activityType: "hiking",
      hasChildren: true,
    },
  },
];

export function getBundleById(id) {
  return bundles.find((b) => b.id === id) || null;
}
