# React with Next.js homework

A small Next.js assignment app with two counters, a GitHub project paragraph, and a searchable product table using the [Fake Store API](https://fakestoreapi.com/).

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open <http://localhost:3013>. Set `PORT` to use a different port, for example `PORT=3000 npm run dev`.

## Run on the course server

```sh
git clone https://github.com/oogwaysprophecy732/nextjs_hw.git
cd nextjs_hw
npm install
npm run build
PORT=3013 npm run start
```

Run the start command inside tmux to keep the app available after disconnecting:

```sh
tmux new -s nextjs-hw
PORT=3013 npm run start
```

Detach with `Ctrl-b`, then `d`. Reattach with `tmux attach -t nextjs-hw`. Visit the course server hostname or IP on port `3013`.

## Assignment pages

Open each page directly:

- `/count` — independent `+1` and `+2` counters; each resets to zero when its next value exceeds ten.
- `/githublink` — project topic paragraph and public GitHub repository link.
- `/store` — searchable table of 20 Fake Store API products.

The pages use the Next.js App Router with TypeScript (`.tsx`). `node_modules/` is excluded by `.gitignore`; the package manifests and lockfile belong in Git.
