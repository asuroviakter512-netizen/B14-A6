# FitLog — Workout Library

A responsive, dark-themed workout library built with Next.js App Router and Tailwind CSS. Browse exercise cards, open workout details, add up to five lifts to today's plan, save workouts for later, and track completed lifts.

## Technologies used
- Next.js App Router
- React
- Tailwind CSS
- JavaScript (ES6+)
- Lucide React icons
- Public FitLog API with a local sample-data fallback
- LocalStorage for the plan, saved workouts, and completion state

## Key features
1. Responsive navigation, hero banner, and workout library.
2. API-powered workout cards with fallback data and loading skeletons.
3. Dynamic workout detail pages with specifications and step-by-step instructions.
4. Today's Plan and Saved tabs with live plan counts and metrics.
5. Five-workout daily cap, add/save/remove actions, and toast notifications.
6. Mark as Done support with state persisted in LocalStorage.
7. Search by workout name, muscle group, or equipment.
8. Sort workouts by duration, calories, or rating.
9. Custom 404 page and mobile-friendly layouts.

## Getting started

### Requirements
Install Node.js 18.18+ (Node.js 20 LTS is recommended) and npm.

### Install and run
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).

### Production build
```bash
npm run build
npm start
```

## API endpoints
- Primary: `https://api.abcz.workers.dev/api/fitlog`
- Alternative: `https://api.api-store.workers.dev/api/fitlog`
- Details: append `/:id` to either endpoint for a single workout.

The app requests the list endpoint in the browser and normalizes common field names. If both APIs are unavailable or return an unrecognized response shape, sample workouts are used so the UI remains testable. If the live API uses different field names, update `normalizeWorkout()` in `lib/workouts.js`.

## Suggested Git commit plan
Make a commit after each meaningful milestone; do not submit everything as one commit.

```bash
git init
git add package.json next.config.mjs postcss.config.mjs tailwind.config.js jsconfig.json .gitignore
git commit -m "chore: initialize Next.js FitLog project"
git add app/layout.js app/globals.css
git commit -m "style: add dark responsive FitLog design system"
git add components/SiteShell.jsx app/page.js
git commit -m "feat: build navbar hero and footer"
git add lib/workouts.js components/FitLogProvider.jsx
git commit -m "feat: load workout data and persist plan state"
git add components/WorkoutCard.jsx components/WorkoutLibrary.jsx
git commit -m "feat: add searchable sortable workout library"
git add 'app/workouts/[id]/page.js'
git commit -m "feat: add dynamic workout detail page"
git add app/my-plan/page.js
git commit -m "feat: build plan saved and completed workout flows"
git add app/not-found.js README.md
git commit -m "docs: add 404 page and project README"
```

Check `git status` after each commit. These commands create eight meaningful commits by staging one milestone at a time.

## Deployment
1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Keep the default Next.js build settings (`npm run build`).
4. Deploy and test `/`, `/my-plan`, a real `/workouts/[id]` URL, and an invalid URL directly after reloading.
5. Add your final live URL and GitHub repository URL to your submission form.

## Notes
- Exercise photos are loaded from remote image URLs; internet access is required to display them.
- Plan and saved data are stored in the browser's LocalStorage, not a shared server database.
- The public API response shape can change; verify the live data in the browser and adjust `normalizeWorkout()` if needed.


## Local workout artwork

The project includes `public/workout-athlete.png`, a bundled gym illustration used across workout cards, plan rows, and workout detail pages to match the supplied FitLog reference design. It works without external image hosting. The hero uses `public/fitlog-hero.png`.
