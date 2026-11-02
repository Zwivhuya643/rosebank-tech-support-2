# Rosebank Tech Support — Website

## Changelog

All notable changes to this project are documented here, organised by date.
Each entry should be detailed enough that the lecturer can see exactly what
was changed and why.

---

### Part 2 Feedback Fixes

- **Date:** 2026-09-17
  **File(s) changed:** contact.html (navigation applies site-wide)
  **Change made:** Fixed broken navigation links — corrected `about us.html` to `about-us.html` (removed the space, which was breaking the link), and `contact` to `contact.html` (was missing the file extension entirely, so the link didn't work). Added missing `home.html` and `Form.html` links to the nav.
  **Reason (feedback addressed):** Non-functional navigation links.

- **Date:** 2026-09-17
  **File(s) changed:** contact.html
  **Change made:** Corrected invalid HTML structure — removed a duplicate nested `<header>` and an unclosed `<nav>` tag that were causing the page to render incorrectly.
  **Reason (feedback addressed):** Invalid/broken HTML markup.

- **Date:** 2026-09-17
  **File(s) changed:** contact.html
  **Change made:** Added `<meta charset="UTF-8">` and a responsive `<meta name="viewport">` tag; added an external stylesheet link plus page CSS (grid layout, card styling, hover states) with a `@media` breakpoint so the layout stacks correctly on mobile.
  **Reason (feedback addressed):** Page was unstyled and not mobile-responsive.

- **Date:** 2026-09-17
  **File(s) changed:** contact.html
  **Change made:** Removed a leftover empty `<img src="">` placeholder and gave the logo image proper `alt` text ("Rosebank Tech Support logo").
  **Reason (feedback addressed):** Missing/empty image alt text and unused placeholder markup.

- **Date:** 2026-10-24
  **File(s) changed:** FAQ.html
  **Change made:** Applied the same navigation fixes as contact.html (corrected `about-us.html` and `contact.html` links, added `home.html` and `Form.html`). Replaced the raw `&copy & #` characters in the footer with the proper `&copy;` and `&bull;` HTML entities.
  **Reason (feedback addressed):** Non-functional navigation links; invalid/malformed HTML entities.

---

### Part 3 — New Functionality

- **Date:** 2026-10-24
  **File(s) changed:** style.css (new, site-wide stylesheet)
  **Change made:** Consolidated all page styling into one external stylesheet using CSS custom properties (colour palette, font, spacing, shadow variables) for consistency across pages. Added a sticky header, responsive nav, service card hover effects, and a mobile-responsive grid system.
  **Reason:** Centralise styling so all pages share one consistent design system instead of repeating CSS per page.

- **Date:** 2026-10-24
  **File(s) changed:** style.css
  **Change made:** Added a CSS-only FAQ accordion effect — the `<details>`/`<summary>` elements now show a `+`/`–` indicator that toggles via the `[open]` attribute selector, with hover and focus states.
  **Reason:** Implements the required interactive element (accordion) using CSS, per the brief's "research and implement interactive elements" requirement.

- **Date:** 2026-10-24
  **File(s) changed:** style.css
  **Change made:** Added a `.motion-banner` component with animated floating circular shapes using `@keyframes floatMove`, as a lightweight CSS animation alternative to a video element.
  **Reason:** Implements the required "animations and transitions using CSS and JavaScript" functionality.

- **Date:** 2026-10-24
  **File(s) changed:** gallery.html (new page)
  **Change made:** Built a new gallery page using `<figure>`/`<figcaption>` elements in a responsive CSS grid, with a hover zoom effect on each image. Structured as a foundation for a lightbox feature (clicking an image to view it larger).
  **Reason:** Implements the required "gallery with a lightbox" functionality from the brief (the lightbox JavaScript is added in a later entry below).

- **Date:** 2026-10-24
  **File(s) changed:** script.js (new), style.css, gallery.html
  **Change made:** Added JavaScript lightbox functionality — clicking a gallery image opens a full-screen overlay with a larger version, caption, close button, click-outside-to-close, and Escape-key support. Added matching `.lightbox` CSS to style.css and linked script.js in gallery.html.
  **Reason:** Completes the "gallery with a lightbox" requirement started above.

- **Date:** 2026-10-24
  **File(s) changed:** enquiry.html (new page), script.js, style.css
  **Change made:** Built a new enquiry form allowing visitors to select a support service (Computer, Network, Account & Password, Email, Student, or Software Support), enter their name, email and problem description. Added JavaScript validation (required fields, email format check, minimum message length) with inline error messages, and a service-specific confirmation message shown after successful submission.
  **Reason:** Implements the required "form with JavaScript validation" on enquiry.html, including a response related to availability/next steps per the brief.

- **Date:** 2026-10-24
  **File(s) changed:** index.html, home.html, about-us.html, services.html, gallery.html, FAQ.html, contact.html, enquiry.html
  **Change made:** Added a unique `<meta name="description">` tag to each page's `<head>`, summarising that page's content for search engines.
  **Reason:** Implements the required on-page SEO "Title Tags and Meta Descriptions" item.

- **Date:** 2026-10-24
  **File(s) changed:** robots.txt (new), sitemap.xml (new)
  **Change made:** Added a robots.txt file allowing all crawlers and pointing to the sitemap, and a sitemap.xml listing all site pages with priority and change-frequency values.
  **Reason:** Implements the required "Robots.txt" and "Sitemap.xml" additional requests.

- **Date:** 2026-10-24
  **File(s) changed:** services.html, script.js, style.css
  **Change made:** Added a live search/filter input above the services grid. JavaScript checks each service card's text against what the user types and hides non-matching cards, with a "no results" message shown when nothing matches.
  **Reason:** Implements the required "Dynamic Content" functionality — using JavaScript to filter and sort content on the services page.

- **Date:** 2026-10-24
  **File(s) changed:** contact.html, style.css
  **Change made:** Added an interactive map (Leaflet + OpenStreetMap) to the Contact page showing the organisation's location with a marker and popup label.
  **Reason:** Implements the required "Interactive Elements" functionality — a location-based map feature.

- **Date:** 2026-10-24
  **File(s) changed:** index.html, home.html, about-us.html, services.html, gallery.html, FAQ.html
  **Change made:** Rebuilt each page using a consistent header, fixed navigation (matching the contact.html fixes), and linked the consolidated style.css. The navigation link to `Form.html` was replaced with a link to the new `enquiry.html` page on every page. Corrected the broken `<Video>`/`<source type="Video">` markup on index.html and home.html into a valid `<video>` element and a properly structured content image/paragraph.
  **Reason:** Brings all pages up to the same fixed, consistent standard established on contact.html, and corrects invalid video markup carried over from Part 1.

- **Date:** 2026-11-01
  **File(s) changed:** index.html, about-us.html, services.html, FAQ.html, contact.html, enquiry.html, Images/ folder
  **Change made:** Added a picture to every page that did not have one (index, about-us, services, FAQ, contact and enquiry), each with descriptive `alt` text. The home page uses a laptop support photo and the gallery shows eight images (A.webp to H.webp). All images are stored in the Images folder.
  **Reason:** Improves visual presentation and supports the on-page SEO requirement for descriptive image file names and alt text.

- **Date:** 2026-11-01
  **File(s) changed:** Images/logo.png, style.css
  **Change made:** Replaced the placeholder logo with the final Rosebank Tech Support logo. The original file was over 1 MB, so a 500 x 500 optimised copy is used. Increased the `header img` height in style.css from 50px to 110px (90px on mobile) and made the header scroll with the page instead of staying fixed, so the logo text is readable.
  **Reason:** Use the organisation's real branding and keep page load time low.

- **Date:** 2026-11-01
  **File(s) changed:** gallery.html, index.html, about-us.html, services.html, FAQ.html, contact.html, enquiry.html
  **Change made:** Added `loading="lazy"` to gallery images and to the extra page pictures so they only load when scrolled into view. Added `preconnect` hints to contact.html for the map library and map tiles.
  **Reason:** Implements the "Page Speed" additional request by reducing the amount loaded up front.

- **Date:** 2026-11-01
  **File(s) changed:** Images/Download.mp4, index.html
  **Change made:** Added a short intro video to the index page using a valid `<video>` element with controls and fallback text.
  **Reason:** Replaces the broken video markup from Part 1 with a working video.

- **Date:** 2026-11-01
  **File(s) changed:** style.css
  **Change made:** Added a `[hidden] { display: none !important; }` rule. Without it, the enquiry form stayed visible after submitting because the form's flex layout overrode the `hidden` attribute, so the confirmation message showed underneath the form instead of replacing it.
  **Reason:** Fixes a bug in the enquiry form confirmation feature.

- **Date:** 2026-11-01
  **File(s) changed:** style.css, Images/hero-bg.webp (new)
  **Change made:** Added a background picture (a blue network pattern) to the page header banner on every page using CSS `background-image`, with a blue gradient over it so the white heading text stays easy to read.
  **Reason:** Makes the page headers more visual and ties the design to the technology and connectivity theme of the site.

---

## References

MDN Web Docs (2026) *CSS grid layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout (Accessed: 24 October 2026).

MDN Web Docs (2026) *&lt;details&gt;: The Details disclosure element*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details (Accessed: 24 October 2026).

MDN Web Docs (2026) *Using CSS animations*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations (Accessed: 24 October 2026).

Leaflet (2026) *Leaflet — an open-source JavaScript library for interactive maps*. Available at: https://leafletjs.com/ (Accessed: 24 October 2026).

OpenStreetMap Foundation (2026) *OpenStreetMap*. Available at: https://www.openstreetmap.org/ (Accessed: 24 October 2026).