<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Workflow Orchestration

### 1. Plan Node Default

Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
If something goes sideways, STOP and re-plan immediately don't keep pushing
Use plan mode for verification steps, not just building
Write detailed specs upfront to reduce ambiguity

### 2. Subagent Strategy

Use subagents liberally to keep main context window clean
Offload research, exploration, and parallel analysis to subagents
For complex problems, throw more compute at it via subagents
One tack per subagent for focused execution

### 3. Self-Improvement Loop

After ANY correction from the user: update `tasks/lessons.md with the pattern
Write rules for yourself that prevent the same mistake
Ruthlessly iterate on these lessons until mistake rate drops
Review lessons at session start for relevant project

### 4. Verification Before Done

Never mark a task complete without proving it works
Diff behavior between main and your changes when relevant
Ask yourself: "Would a staff engineer approve this?"
Run tests, check logs, demonstrate correctness

### 5. Demand Elegance (Balanced)

For non-trivial changes: pause and ask "is there a more elegant way?"
If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
Skip this for simple, obvious fixes don't over-engineer
Challenge your own work before presenting it

### 6. Autonomous Bug Fixing

When given a bug report: just fix it. Don't ask for hand-holding
Point at logs, errors, failing tests then resolve them
Zero context switching required from the user
Go fix failing CI tests without being told how

## Task Management

1. **Plan First**: Write plan to tasks/todo.md with checkable items
2. **Verify Plan**: Check in before starting implementation
3. **Track Progress**: Mark items complete as you go
4. **Explain Changes**: High-level summary at each step
5. **Document Results**: Add review section to tasks/todo.md`
6. **Capture Lessons**: Update tasks/lessons.md after corrections

## Core Principles

**Simplicity First**: Make every change as simple as possible. Impact minimal code.
**No Laziness**: Find root causes. No temporary fixes. Senior developer standards.
**Minimat Impact**: Changes should only touch what's necessary. Avoid introducing bugs.

# UI Components

description: UI Component Creation Rules (Default/Screen)

## File Structure

```
src/components/{ComponentName}/
├── {ComponentName}.jsx
├── {ComponentName}.module.css
```

### Component Categories & Naming

#### 1. Components ( `src/components/` )

* **Purpose:** Reusable UI components that form the building blocks of the application (e.g.,  `Button`,  `FixedContainer`,  `Head`,  `SettingsMenu`).
* **Structure:** Each component has its own folder with:
  + `ComponentName.jsx` - Main component file
  + `ComponentName.module.scss` - Component-specific styles using CSS Modules
  + `constants.ts` - Component-specific constants (if needed)
* **Styling:** Use CSS Modules (`ComponentName.module.css`). DO NOT USE tailwind.
* **Props:** Should accept standard props like `className`,  `children`, and event handlers.
* **Naming:**
  + Folder: `PascalCase` (e.g.,  `Button`)
  + File: `PascalCase.jsx` (e.g.,  `Button.jsx`)

### Images & Icons

`steez.css` sets `img, svg { width: 100% }` globally. This is intentional for content images but causes icons and fixed-size images to blow up to fill their container. **Do not modify steez.css to fix this.** Instead, wrap the `<Image>` (or `<img>`) in a container element with explicit width/height:

```jsx
<span className={styles.iconWrap} style={{ width: 20, height: 20 }}>
  <Image src="/images/icon-example.svg" alt="" width={20} height={20} />
</span>
```

```css
/* In the component's CSS module */
.iconWrap {
  display: flex;
  flex-shrink: 0;
}
```

The container constrains the image so `width: 100%` fills it at the intended size. Always use this pattern for icons and fixed-dimension images.

### Layout

Use flexbox even if Figma shows absolute positioning. Infer flex direction/gap/alignment from visual arrangement.

### Reuse First

Check before building:

* `src/components`
* `src/hooks`

## Styling

## Use `steez.css`

`steez.css` is a global stylesheet loaded at the root of every consuming project. It styles HTML primitives and components using CSS custom properties. Light theme only — no dark mode, no toggling, no system preference detection.

## Critical rule

**Use the tokens and classes from `steez.css` first.** Do not write colors, font sizes, spacing, border radii, shadows, or easing curves into CSS modules. CSS modules are for **layout only** (grid, flexbox, positioning, dimensions). If `steez.css` already handles it, do not duplicate it.

## What steez.css provides (do not rewrite in modules)

* Colors (backgrounds, text, borders, accents)
* Typography (font families, sizes, weights, line heights, heading scale)
* Spacing (margins, paddings via tokens)
* Borders and radii
* Shadows / elevation
* Easing / animation timing
* Button styles and variants
* Form input styles and validation states
* Select, toggle, dialog, details/accordion, popover, progress, meter, scrollbar styling
* Focus outlines
* Print styles
* Screen-reader-only utility

## What belongs in CSS modules

* Grid and flexbox layout
* Container widths and max-widths
* Positioning (absolute, relative, sticky, fixed, z-index)
* Explicit widths/heights for layout purposes
* Gap values (use `--spacing-*` tokens for the value)
* Component-specific layout that doesn't exist in steez.css

When a module needs a color, size, or spacing value, reference the custom property — never hard-code.

```css
/* WRONG */
.card {
    padding: 16px;
    background: #c26b380d;
    border-radius: 8px;
}

/* RIGHT */
.card {
    padding: var(--spacing-sm);
    background: var(--color-surface);
    border-radius: var(--border-radius);
}
```

---

## Figma-to-token mapping

When translating Figma designs, map every style to a custom property. Never hard-code hex values, pixel font sizes, or raw spacing.

### Colors

| Figma style | CSS custom property | Light value |
|---|---|---|
| Primary | `--color-primary` | `#C26C39` |
| Primary Light | `--color-primary-light` | `#C26B381A` |
| Primary Dark | `--color-primary-dark` | oklch derived, ~15% darker |
| Secondary | `--color-secondary` | `#13453B` |
| Secondary Light | `--color-secondary-light` | oklch derived, ~15% lighter |
| Secondary Dark | `--color-secondary-dark` | oklch derived, ~15% darker |
| Tertiary | `--color-tertiary` | `#447986` |
| Tertiary Light | `--color-tertiary-light` | oklch derived |
| Tertiary Dark | `--color-tertiary-dark` | oklch derived |
| Action / Interactive | `--color-action` | maps to `--color-primary` |
| Highlight | `--color-highlight` | maps to `--color-secondary` |
| Success / Green | `--color-success` | `#A3BE8C` |
| Warning / Yellow | `--color-warning` | `#EBCB8B` |
| Error / Red | `--color-error` | `#BF616A` |
| Surface / Background | `--color-surface` | `#C26B380D` |
| Card / Raised surface | `--color-surface-raised` | `--color-neutral-0` in light |
| Viewport background | `--color-viewport-background` | `#F8F7F6CC` |
| Text heading / primary | `--color-text-primary` | `#0F172A` in light |
| Text caption / secondary | `--color-text-secondary` | `--color-neutral-6` in light |
| Text tertiary | `--color-text-tertiary` | `--color-secondary` in light |
| Text body / paragraph | `--color-text-body` | `--color-neutral-8` in light |
| Border / Stroke / Divider | `--color-border` | `--color-primary` in light |
| Black | `--color-black` | `#000` |
| White | `--color-white` | `#DEDEDE` |
| Neutral 0–10 | `--color-neutral-0` to `--color-neutral-10` | oklch mix from white to black |

Every brand/status color also has `-light-contrast` and `-dark-contrast` variants for text on those backgrounds.

If a Figma color has no exact match, use the nearest neutral step or derive with relative color syntax: `oklch(from var(--color-primary) calc(l + 0.1) c h)` .

### Typography

| Figma text style | CSS property or class |
|---|---|
| Display | `--font-size-display` or class `.display` |
| H1 | `--font-size-h1` or `<h1>` / `.h1` |
| H2 | `--font-size-h2` or `<h2>` / `.h2` |
| H3 | `--font-size-h3` or `<h3>` / `.h3` |
| H4 | `--font-size-h4` or `<h4>` / `.h4` |
| H5 / Body base | `--font-size-h5` = `--font-size-base` |
| H6 / Small heading | `--font-size-h6` |
| Body | `--font-size-body` (= base) |
| Body large | `--font-size-body-lg` (1.25x base) |
| Body small | `--font-size-body-sm` (0.75x base) |
| Primary font | `--font-family` → Varela Round |
| Heading font | `--font-family-heading` → DM Sans |
| Monospace / code | `--font-tertiary-stack` |

The type scale is fluid and computed from `--type-ratio: 1.125` (Major Second). All sizes are relative — use tokens, not pixel values.

**Font weights:**

| Figma | Token | Value |
|---|---|---|
| Thin | `--font-weight-thin` | 100 |
| Extra Light | `--font-weight-extra-light` | 200 |
| Light | `--font-weight-light` | 300 |
| Regular | `--font-weight-normal` | 400 |
| Medium | `--font-weight-medium` | 500 |
| Semi Bold | `--font-weight-semi-bold` | 600 |
| Bold | `--font-weight-bold` | 700 |
| Extra Bold | `--font-weight-extra-bold` | 800 |
| Black | `--font-weight-black` | 900 |

**Line heights:**

| Figma | Token | Value |
|---|---|---|
| Tight | `--line-height-reset` | 1 |
| Heading | `--line-height-heading` | 1.25 |
| Body | `--line-height-text` | 1.5 |

### Spacing

Map Figma auto-layout gaps and padding to tokens, not pixels:

| Figma | Token |
|---|---|
| XS (~8px) | `--spacing-xs` |
| SM (~12px) | `--spacing-sm` |
| MD / Base (~24px) | `--spacing-md` |
| LG (~36px) | `--spacing-lg` |
| XL (~48px) | `--spacing-xl` |

Base is fluid: `clamp(2rem, 1.5rem + 1.5vw, 3rem)` . Pixel values are approximate.

### Borders & radius

| Figma | Token |
|---|---|
| Border width | `--border-width` (1px) |
| Border shorthand | `--border` |
| Border color | `--border-color` |
| Corner radius | `--border-radius` (0.5rem) |

### Shadows

| Figma elevation | Token |
|---|---|
| Subtle | `--elevation-1` |
| Low | `--elevation-2` |
| Medium | `--elevation-3` |
| High | `--elevation-4` |
| Heavy | `--elevation-5` |

### Controls (buttons, inputs, selects)

| Figma | Token |
|---|---|
| Control height SM | `--control-block-size-sm` |
| Control height default | `--control-block-size` (2.75rem) |
| Control height LG | `--control-block-size-lg` |
| Control font size | `--control-font-size` |
| Control padding SM | `--control-padding-inline-sm` |
| Control padding default | `--control-padding-inline` |
| Control padding LG | `--control-padding-inline-lg` |

### Animation

| Figma | Token |
|---|---|
| Duration default | `--animation-duration` (0.5s) |
| Duration slow | `--animation-duration-slow` (1s) |
| Duration fast | `--animation-duration-fast` (0.25s) |
| Default easing | `--animation-timing` (ease-out-cubic) |

24 named easing curves available: `--ease-out-cubic` , `--ease-in-out-quart` , `--ease-out-back` , etc. Use `--ease-{direction}-{curve}` where direction is `in` , `out` , or `in-out` and curve is `quad` , `cubic` , `quart` , `quint` , `sine` , `expo` , `circ` , or `back` .

### Focus

| Figma | Token |
|---|---|
| Focus ring | `--focus-outline` (2px solid action color) |
| Focus offset | `--focus-outline-offset` (2px) |

---

## Component HTML patterns

These are styled automatically by `steez.css` . Use semantic HTML — no classes needed unless noted.

### Buttons

```html
<button>Default</button>
<button class="secondary">Secondary</button>
<button class="success">Success</button>
<button class="error">Error</button>
<button class="warning">Warning</button>
<button class="light">Light</button>
<button class="dark">Dark</button>
<button class="outline">Outline</button>
<button class="outline secondary">Outline + variant</button>
<button class="link">Looks like a link</button>
<button class="sm">Small</button>
<button class="lg">Large</button>
<a href="/path" role="button">Link as button</a>
```

Also applies to `[type="button"]` , `[type="reset"]` , `[type="submit"]` .

### Forms

```html
<label for="x">Label</label>
<input type="text" id="x" required>
<textarea></textarea>
<div class="form-group">...</div>
<fieldset>
    <legend>Group</legend>...
</fieldset>
```

* Validation is automatic: `:user-invalid` / `:user-valid` style after interaction
* Fieldset legends auto-append `*` when children are `:required`
* Submit button dims to 60% opacity when the form has invalid fields

### Select

```html
<select>
    <option value="">Choose...</option>
    <option>A</option>
</select>
```

Progressively enhanced with `appearance: base-select` where supported.

### Toggle

```html
<div class="toggle">
    <input type="checkbox" id="t">
    <label for="t">Label</label>
</div>
```

### Dialog

```html
<dialog id="d">
    <h2>Title</h2>
    <p>Content</p>
    <button onclick="this.closest('dialog').close()">Close</button>
</dialog>
```

Open via `document.getElementById('d').showModal()` .

### Details / Accordion

```html
<details>
    <summary>Title</summary>
    <p>Content</p>
</details>
```

Stack with shared `name` attribute for exclusive accordion. Adjacent details auto-merge borders.

### Popover

```html
<button popovertarget="p">Open</button>
<div id="p" popover>Content</div>
```

### Progress & Meter

```html
<progress value="70" max="100"></progress>
<meter min="0" max="100" low="25" high="75" optimum="80" value="50"></meter>
```

### Lists

Reset to no bullets by default. Restore with class:

```html
<ul class="bullets">
    <li>Item</li>
</ul>
```

### Tables

```html
<table>
    <thead>
        <tr>
            <th>Col</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data</td>
        </tr>
    </tbody>
</table>
```

### Headings on non-heading elements

```html
<span class="h1">Styled as h1</span>
<p class="display">Display size</p>
```

Classes `.h1` through `.h6` and `.display` are available.

### Utility

* `.sr-only` / `.visibility-hidden` — screen reader only
* `.form-group` — bottom margin for form field grouping
* `.bullets` — restores list markers

---

## Overriding tokens

Write overrides on `:root` outside any `@layer` . They automatically win:

```css
:root {
    --color-primary: #ff6600;
    --font-family: "Custom Font", sans-serif;
    --border-radius: 0;
    --type-ratio: 1.333;
}
```

Scale the entire system by changing root font-size (all tokens use `rem` ):

```css
html {
    font-size: 14px;
}
```

## Breakpoints

Available as `@custom-media` (requires Lightning CSS at build time):

```css
@media (--sm) {
    /* 640px+  */
}

@media (--md) {
    /* 768px+  */
}

@media (--lg) {
    /* 1024px+ */
}

@media (--xl) {
    /* 1280px+ */
}

@media (--2xl) {
    /* 1536px+ */
}
```

## Browser support

Chrome/Edge 123+, Firefox 128+, Safari 17.5+.

# Content & Copy Data

## Rule: Separate text content from components

All UI text/copy MUST live in `src/data/` — never hard-code strings in JSX.

## Figma-to-data extraction

When translating a Figma design, extract **all** visible text content into a data file **before** building the component. This includes headings, body copy, button labels, placeholder text, captions, tooltips, alt text, and list items.

### File structure

```
src/data/
├── home.js          # copy for the home page
├── about.js         # copy for another page
├── shared.js        # copy reused across pages (nav, footer, site name)
```

One file per page or feature. Use `shared.js` for cross-cutting copy (navigation links, footer text, site-wide labels).

### Data format

Export a plain object organized by section. Keys describe the UI region; values are strings or arrays of objects.

```js
// src/data/home.js
export const home = {
  hero: {
    heading: "Explore the Outdoors",
    subheading: "Your next adventure starts here",
    cta: "Get Started",
  },
  features: [
    {
      title: "Trail Maps",
      description: "Detailed maps for every skill level.",
    },
  ],
};
```

### Rules

1. **Extract first, build second.** Before writing any component JSX, create or update the corresponding data file with all text from the Figma design.
2. **No string literals in JSX.** Components import from `src/data/` and render via object access: `{home.hero.heading}`.
3. **One file per page/feature.** Name the file after the page route or feature (e.g., `home.js`, `pricing.js`, `onboarding.js`).
4. **Use `shared.js` for reusable copy.** Nav links, footer text, site name, and any string used on 2+ pages.
5. **Mirror Figma section names.** Use the Figma frame/section names as object keys (converted to camelCase) so copy is easy to trace back to the design.
6. **Keep values flat when possible.** Prefer `{ heading: "...", subheading: "..." }` over deeply nested structures. Use arrays for repeated items (cards, features, list items).
7. **Images stay out.** Data files hold text only. Image paths/URLs belong in component code or a separate asset map.
