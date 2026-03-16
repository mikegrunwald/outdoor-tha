export const destinations = [
  // Fishing
  {
    id: "lake-tahoe-ca",
    title: "Lake Tahoe, CA",
    activityType: "fishing",
    description:
      "Crystal clear waters and trophy trout in the Sierra Nevada mountains.",
    image: "/images/fishing-lake-tahoe.jpg",
    badge: "Elite Choice",
    badgeVariant: null,
    lodgingIds: ["tahoe-lakeside-cabin", "tahoe-pine-lodge", "tahoe-glamping"],
    activityIds: [
      "tahoe-fly-fishing",
      "tahoe-boat-rental",
      "tahoe-guided-dawn",
      "tahoe-kayak-fishing",
    ],
  },
  {
    id: "kenai-river-ak",
    title: "Kenai River, AK",
    activityType: "fishing",
    description:
      "World-class salmon fishing amidst breathtaking Alaskan wilderness.",
    image: "/images/fishing-kenai-river.jpg",
    comingSoon: true,
  },
  {
    id: "key-west-fl",
    title: "Key West, FL",
    activityType: "fishing",
    description:
      "Thrilling deep sea excursions for marlin, tuna, and sailfish.",
    image: "/images/fishing-key-west.jpg",
    comingSoon: true,
  },

  // Skiing
  {
    id: "aspen-co",
    title: "Aspen, CO",
    activityType: "skiing",
    description:
      "Four mountains of world-renowned terrain and legendary après-ski.",
    image: "/images/skiing-aspen.jpg",
    lodgingIds: ["aspen-alpine-loft", "aspen-pine-retreat", "aspen-summit-chalet"],
    activityIds: [
      "aspen-lift-pass",
      "aspen-ski-lesson",
      "aspen-snowshoe-tour",
      "aspen-apres-ski",
    ],
  },
  {
    id: "zermatt-switzerland",
    title: "Zermatt, Switzerland",
    activityType: "skiing",
    description:
      "Iconic views of the Matterhorn and high-altitude glacier skiing.",
    image: "/images/skiing-zermatt.jpg",
    comingSoon: true,
  },
  {
    id: "niseko-japan",
    title: "Niseko, Japan",
    activityType: "skiing",
    description:
      "Famous for the lightest, deepest powder snow on the planet.",
    image: "/images/skiing-niseko.jpg",
    badge: "Powder Alert",
    badgeVariant: "solid",
    comingSoon: true,
  },

  // Hiking & Trekking
  {
    id: "zion-ut",
    title: "Zion, UT",
    activityType: "hiking",
    description:
      "Navigate the Narrows or ascend the thrilling Angel\u2019s Landing.",
    image: "/images/hiking-zion.jpg",
    lodgingIds: ["zion-canyon-lodge", "zion-glamping-tent", "zion-desert-casita"],
    activityIds: [
      "zion-guided-hike",
      "zion-canyoneering",
      "zion-horseback",
      "zion-stargazing",
    ],
  },
  {
    id: "patagonia-chile",
    title: "Patagonia, Chile",
    activityType: "hiking",
    description:
      "Epic treks through granite peaks and turquoise glacial lakes.",
    image: "/images/hiking-patagonia.jpg",
    comingSoon: true,
  },
  {
    id: "everest-base-camp-nepal",
    title: "Everest Base Camp, Nepal",
    activityType: "hiking",
    description: "The ultimate trek through the heart of the Himalayas.",
    image: "/images/hiking-everest.jpg",
    comingSoon: true,
  },
];

export function getDestinationById(id) {
  return destinations.find((d) => d.id === id) || null;
}

export function getDestinationsByType(activityType) {
  return destinations.filter((d) => d.activityType === activityType);
}
