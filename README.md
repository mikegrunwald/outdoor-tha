# ROAM & BOARD : Outdoor Adventures

An interactive prototype exploring a modern booking experience for bundling lodging, activities, and add-ons into an outdoor trip — with a focus on an in-cart recommendation systems within a trip-building wizard.

**[Live Demo](https://outdoor-tha.vercel.app)**

## Table of Contents

- [Happy Path](#happy-path)
- [Prototype Features](#prototype-features)
- [Technologies Used](#technologies-used)
- [Discoveries \& Learnings](#discoveries--learnings)
- [Getting Started](#getting-started)

## Happy Path

1. Select a destination from the activities section on the landing page
   1. (Hopefully there was content scaffoled out for your selection, if not click "back to explore" and try again)
2. Select a date range, number of adults, and children
3. Choose a lodging option
4. View relevant activities and add-on options in the cart sidebar
5. add activities and add-on options with the "+" button to see totals and line items updated
6. Rince and repeat with different selections to see different recommendations

## Prototype Features

The core focus of this prototype was to explore an **in-cart recommendation system within a trip-building wizard**. The experience flows as follows:

* **Destination selection** — The landing page presents a curated set of outdoor adventure types (mountain, lake, desert, etc.). The customer picks a destination, which sets the context for everything that follows.
* **Trip wizard** — After selecting a destination, the customer enters a guided wizard to build out their trip:
  + **Details selection** — Enter arrival and departure dates and of attending adults and children
  + **Lodging selection** — Browse and choose from available accommodations at the destination
  + > **NOTE:** For prototyping purposes, the wizard experience really ends here.
  + **Activities & experiences** — Add ski tickets, guided hikes, dining reservations, and more
  + **Equipment rentals** — Gear up with rental options relevant to the selected adventure type
* **Smart in-cart recommendations** — As the itinerary takes shape, the system surfaces contextual suggestions based on what's already been selected. Adding ski tickets suggests a ski package (tickets + rentals + lesson); adding children suggests Kids Club or a family package; adding equipment suggests a guided tour or lesson.

> Currently optimized for desktop viewports only.

## Technologies Used

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) (canary) | React framework with App Router |
| [React 19](https://react.dev/) | UI library |
| [React Compiler](https://react.dev/learn/react-compiler) | Automatic memoization via Babel plugin |
| [Zustand](https://zustand.docs.pmnd.rs/) | Lightweight state management for cart and trip state |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library |
| CSS Modules | Component-scoped styling |
| [Vercel](https://vercel.com/) | Deployment and hosting |

## Discoveries & Learnings

**Designing without constraints is its own constraint.** When presented with a blue-sky opportunity to build a booking experience without any prior brand identity or real data sources, it becomes surprisingly difficult to design meaningful constraints for a prototype. The absence of existing brand guidelines, content hierarchies, and data schemas means you're simultaneously designing the product *and* the boundaries it lives within.

**A linear wizard may not be the right pattern for trip building.** A typical step-by-step wizard flow works well for simple, sequential tasks — but building a detailed outdoor trip involves browsing, comparing, and revisiting decisions. Lodging selection in particular would not meet customer requirements without additional ways to explore options (filtering, comparison views, detail modals). The process is more exploratory than linear.

**In-cart recommendations need special treatment on mobile.** Surfacing contextual bundle suggestions alongside a growing cart works naturally on wider viewports, but a mobile experience would need careful consideration — perhaps a bottom sheet, inline expansion, or a dedicated recommendations step — to avoid overwhelming the user or burying the suggestions.

**A persistent agenda view adds clarity.** A constant or easily accessible agenda/itinerary UI could help customers gain a better understanding of their scheduled activities, rental windows, and overall availability. This would reduce cognitive load and make it easier to spot gaps or conflicts in the trip plan.

**Date selection could be simplified.** A potential UI optimization would be to combine the arrival and departure date pickers into a single range-based date picker component, reducing interaction steps and making the travel window more visually obvious.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the prototype.
