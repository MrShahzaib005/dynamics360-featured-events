# Featured Events - Dynamics 360 Case Study

I developed a responsive, single-page application (SPA) designed to help users discover local events. This project was built as part of the Web Development Internship selection process for Dynamics 360.

**Live Preview:** [INSERT YOUR VERCEL LINK HERE]

## Features

- **Dynamic Data Rendering:** Event data is not hardcoded in index.html. It is loaded asynchronously from a local `events.json` file, showcasing a real-world API consumption pattern.
- **Real-Time Search:** Users can filter events by title or location.
- **Fully Responsive:** Utilizes CSS Grid and Flexbox to ensure a smooth experience across desktop, tablet, and mobile devices.
- **Mobile Menu:** Built a collapsible hamburger menu for mobile using a simple class toggle script.
- **Navigation Fixes:** Added scroll-behavior: smooth and fixed the sticky header overlap issue using CSS padding.

## Tech Stack

- **HTML5:** Semantic markup for better accessibility and SEO.
- **CSS3:** Custom styling using CSS Variables, Grid, and Flexbox.
- **JavaScript (ES6+):** Vanilla JS for DOM manipulation, data fetching (`fetch` API), and event handling.

## Project Structure

```bash
dynamics360-event-portal/
├── css/
│   └── style.css       
├── js/
│   └── script.js       
├── events.json         
├── index.html          
└── README.md           