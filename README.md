# Kana Master Web

Web version of Kana master, which was originally an iOS app, released in 2015, to learn the Japanese kana.

This repository serves as a way to show that Svelte can be used to build progressive web apps.

## Tech used

* I used the Svelte JS template as a base. It lives at https://github.com/sveltejs/template.
* For routing I used Routify: http://routify.now.sh/

## Running the project

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000).

## Compiling SCSS

Run

```bash
npm run-script css-dev
```

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

## Deploy

`npm install -g now`
`npm run build && cd public && now deploy --name kanamaster --prod -A ../now.json`
