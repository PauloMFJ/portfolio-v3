# portfolio-v3

Portfolio of Paulo Ferreira Jorge

## Installation

Normalize Node / NPM version (if you haven't got NVM installed, follow instructions [here](https://github.com/nvm-sh/nvm)):

```bash
nvm use
```

Install dependencies:

```bash
npm ci
```

To run the project in _development_ mode, run:

```bash
npm run dev
```

To build the project:

```bash
npm run build
```

To run the project in _production_ mode, run:

```bash
npm run start
```

**Note**: Changes aren't hot reloaded if using `start`, you must run build to see anything new.

Then, open [http://localhost:3000](http://localhost:3000) with your browser to see the project.

## Dependency Check

To run dependency check, run:

```bash
npm run depcheck
```

This is useful for keeping packages up to date.

After running the command, simply select the packages you want to update (using `space` key) then click `enter` key to update selected.

## Linting

Linting by Prettier and ESLint. To lint run the following:

```bash
npm run lint
```

To automatically fix _most_ linting errors:

```bash
npm run fix
```
