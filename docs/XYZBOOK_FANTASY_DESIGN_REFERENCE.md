# XYZBOOK — Approved Fantasy Matches UI Reference

## Scope
Implement **only the Fantasy Matches listing screen**, corresponding to the **second screen from the left** in the approved four-screen concept (Home / Fantasy Matches / Match Detail / Team Builder). This document is a textual design specification, **not the original image**. Do not claim pixel-perfect visual verification without viewing the original reference image.

## Visual direction
- Premium, simple dark sports interface: deep navy page background, slightly lighter navy cards, lime-green primary actions, white main text, muted secondary labels.
- Mobile-first at 360px, 390px and 430px; large readable team names, flags or initials, match status and scores. Strong spacing and hierarchy.
- Compact header reading Fantasy Matches, minimal Live / Upcoming selection, uncluttered cards with one prominent Create Team or View Match action per match.
- Avoid oversized banners, redundant CTAs, tiny typography, fake engagement metrics, excessive demo warnings and large empty cards.
- Keep existing bottom navigation destinations and make current Fantasy destination visually clear.
- Mark simulated scores and fixtures clearly as DEMO / SIMULATED; never imply real live matches, real prizes, participants or payments.

## Preserve existing behavior
- Existing read-only Fantasy API and fixture ordering, route navigation, XI validation, credits, role limits, captain/vice-captain, saved teams, browser history and five bottom-nav destinations.
- Do not modify Home, Markets, Profile, backend, database, deployments or preview visibility.
- Preserve unrelated dirty workspace changes; no resets or unrelated edits.

## Visual acceptance
Take actual Android-width screenshots at 360px and 390px after implementation. Review text size, card density, spacing, button placement, status labels and scroll behavior. Passing tests does not prove the UI matches the approved four-screen image; the original image must be supplied for a true side-by-side comparison.
