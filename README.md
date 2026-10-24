# Shared Curiosity — private conversation game

A conversation game for two people. In the production game, each person answers independently; the mutual reveal helps people notice shared interests and talk about differences without a score.

**Live project:** [Shared Curiosity](https://sharedcuriosity.com/?utm_source=github&utm_medium=repository&utm_campaign=showcase) · Adults 18+

> This public showcase contains only a generic, non-explicit demonstration. It does not include production question banks, private session data, credentials, or adult artwork.

## Try the local demo

Open `index.html` in a browser. The demo runs locally and does not send or store answers. Both sample answer controls are on the same screen, so this is not private play; it only illustrates how a reveal can wait until both choices are made. It is not the production two-device game or the Cloudflare API.

## Why this project exists

Couples often want an easy way to start conversations without turning answers into a compatibility score. Shared Curiosity explores a simple pattern: independent answers in production, a mutual reveal after both people finish, and gentle prompts for what to discuss next.

## Privacy approach

- No account or email is needed to try the live experience.
- The production game uses temporary rooms and supports session deletion.
- This demo keeps sample choices in page memory only; refreshing clears them. The choices are visible on the same screen.
- A shared answer is a conversation starter, never consent or an obligation.

## Technology

The live site is built with Astro and TypeScript, with Cloudflare Workers and D1 for temporary game sessions. This repo is a standalone, static illustration of the reveal idea and has no backend.

## Scope

This repository is a project showcase and educational interface demo. It intentionally excludes production content and session handling. No license is included yet; please contact the project owner before reusing the code.
