export const activities = {
  // Lake Tahoe — Fishing
  "tahoe-fly-fishing": {
    id: "tahoe-fly-fishing",
    title: "Fly Fishing 101",
    description:
      "Half-day guided intro to fly fishing on the crystal-clear Truckee River. All gear provided.",
    image: "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800&q=80",
    pricePerPerson: 95,
    duration: "4 hours",
    tags: ["beginner", "guided"],
  },
  "tahoe-boat-rental": {
    id: "tahoe-boat-rental",
    title: "Fishing Boat Rental",
    description:
      "Full-day pontoon boat rental with fish finder and trolling motor. Explore the lake at your own pace.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    pricePerPerson: 150,
    duration: "Full day",
    tags: ["self-guided", "boat"],
  },
  "tahoe-guided-dawn": {
    id: "tahoe-guided-dawn",
    title: "Guided Dawn Trip",
    description:
      "Pre-sunrise departure with a local expert. Target trophy trout during the golden feeding window.",
    image: "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800&q=80",
    pricePerPerson: 175,
    duration: "5 hours",
    tags: ["advanced", "guided", "early-morning"],
  },
  "tahoe-kayak-fishing": {
    id: "tahoe-kayak-fishing",
    title: "Kayak Fishing Adventure",
    description:
      "Paddle to secluded coves and fish from a stable fishing kayak. Includes gear and instruction.",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&q=80",
    pricePerPerson: 85,
    duration: "3 hours",
    tags: ["beginner", "kayak"],
  },

  // Aspen — Skiing
  "aspen-lift-pass": {
    id: "aspen-lift-pass",
    title: "Lift Pass",
    description:
      "Full-day access to all four Aspen mountains. Includes access to the gondola and all chairlifts.",
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80",
    pricePerPerson: 189,
    duration: "Full day",
    tags: ["essential", "all-levels"],
  },
  "aspen-ski-lesson": {
    id: "aspen-ski-lesson",
    title: "Private Ski Lesson",
    description:
      "One-on-one instruction with a certified instructor. Tailored to your skill level.",
    image: "https://images.unsplash.com/photo-1565992441121-4367c2967103?w=800&q=80",
    pricePerPerson: 250,
    duration: "3 hours",
    tags: ["beginner", "guided", "lesson"],
  },
  "aspen-snowshoe-tour": {
    id: "aspen-snowshoe-tour",
    title: "Snowshoe Nature Tour",
    description:
      "Guided snowshoe hike through pristine backcountry with hot cocoa breaks and wildlife spotting.",
    image: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800&q=80",
    pricePerPerson: 75,
    duration: "2.5 hours",
    tags: ["beginner", "guided", "nature"],
  },
  "aspen-apres-ski": {
    id: "aspen-apres-ski",
    title: "Après-Ski Wine Tour",
    description:
      "Visit three mountain-town tasting rooms with a local sommelier. Includes charcuterie pairings.",
    image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=800&q=80",
    pricePerPerson: 110,
    duration: "3 hours",
    tags: ["social", "food-drink"],
  },

  // Zion — Hiking
  "zion-guided-hike": {
    id: "zion-guided-hike",
    title: "Guided Canyon Hike",
    description:
      "Expert-led hike through Zion's iconic narrows or Angel's Landing. Safety gear and permits included.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    pricePerPerson: 120,
    duration: "6 hours",
    tags: ["intermediate", "guided"],
  },
  "zion-canyoneering": {
    id: "zion-canyoneering",
    title: "Canyoneering Adventure",
    description:
      "Rappel into slot canyons with experienced guides. No prior experience needed — just a sense of adventure.",
    image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=800&q=80",
    pricePerPerson: 165,
    duration: "5 hours",
    tags: ["adventure", "guided"],
  },
  "zion-horseback": {
    id: "zion-horseback",
    title: "Horseback Canyon Ride",
    description:
      "Ride through red rock trails on gentle quarter horses. Scenic overlooks and photo stops included.",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80",
    pricePerPerson: 95,
    duration: "2 hours",
    tags: ["beginner", "scenic"],
  },
  "zion-stargazing": {
    id: "zion-stargazing",
    title: "Stargazing Experience",
    description:
      "Evening astronomy session with high-powered telescopes. Zion's dark skies reveal the Milky Way.",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
    pricePerPerson: 55,
    duration: "2 hours",
    tags: ["evening", "nature", "family"],
  },
};

export function getActivityById(id) {
  return activities[id] || null;
}

export function getActivitiesByIds(ids) {
  if (!ids) return [];
  return ids.map((id) => activities[id]).filter(Boolean);
}
