# XYZBOOK — Safe Codespace Handoff and Integration Plan

**Status:** The current GitHub branches do not expose `integration/src/demo/FantasyApp.tsx` or `integration/package.json`, which have been described as present in the Codespace. **Do not assume the remote repository reflects the Codespace.**

## One-time handoff from the existing Codespace

Run a **read-only** inventory first in `/workspaces/xyzbook-v2`:

```bash
pwd
git status --short
git branch --show-current
git remote -v
git log -1 --format='%h %s'
git ls-files integration fantasy-api | head -100
```

Then inspect whether `integration/src/demo/FantasyApp.tsx`, `integration/src/demo/FantasyMatchCard.tsx`, `integration/src/demo/fantasy.css`, and `fantasy-api/` exist. Report untracked files and changes without dumping secrets.

**No reset, clean, stash, checkout, pull, push, commit, or deployment until the owner approves a concrete preservation plan.** Never include `.env`, secrets, private credentials, local storage or generated dependency folders in a commit.

## Design prototype already available

- `docs/fantasy-matches-mobile-prototype.html` — standalone visual prototype; not integrated into the live app.
- `docs/XYZBOOK_FANTASY_DESIGN_REFERENCE.md` — written visual criteria.
- Branch: `design/xyzbook-fantasy-visual-reference`.

The original approved four-screen image is **not** in the repository; do not assert visual pixel-level fidelity.

## Integration once the Codespace code is preserved

1. Identify the real match data shape, routes, existing shared components, CSS entrypoints and tests.
2. Adapt the prototype's **layout**, not its hardcoded demo fixture array, into the actual React Fantasy Matches listing.
3. Preserve read-only API integration, match order, builder selection, captain/vice-captain, credit/role limits, storage, browser history, and five bottom-nav destinations.
4. Do not introduce real-money claims or fake live scores. Mark all simulated content.
5. Run focused unit tests, typecheck and build. Capture 360px/390px mobile screenshots and compare against the approved reference when it becomes available.
6. Only then ask the owner for approval to merge or deploy.

## Current blockers

- The active Codespace workspace and its uncommitted changes are not available through the GitHub repository API.
- No direct Codespaces terminal access exists in this assistant connection.
- The standalone prototype has not been integrated or browser-tested in the active app.

## Reporting format

`COMPLETED | REMAINING | BLOCKERS | NEXT SAFE ACTION` in short Hindi paragraphs.
