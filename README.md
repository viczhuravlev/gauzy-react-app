<h1 align="center">
  Gauzy ⚗️ Frontend
</h1>

<br>

## Description

This is a basic frontend template project to use as starting point to build something or to just test stuff. It has been done in a reasonably transparent way to see how everything works under the hood and to allow to configure the necessary.

The tech stack is:

- [TypeScript](https://www.typescriptlang.org)
- [React](https://reactjs.org)
- [React Router](https://reacttraining.com/react-router/web)
- [styled-components](https://www.styled-components.com)
- [webpack](https://webpack.js.org)
- [Babel](https://babeljs.io)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Jest](https://jestjs.io)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

<br>

## Instructions

To work on it, you can fork, clone, or generate a repo from this template, and download it into your computer.

To initialize the project you have two options:

1. Install [Node.js](https://nodejs.org) and [Yarn](https://classic.yarnpkg.com), run the command `yarn install --frozen-lockfile` to install the required dependencies, and run `yarn start` to start a local development server.

2. Run `docker-compose up` to initialize it with [Docker](https://www.docker.com/).

To create a production build, run `yarn build`, and to serve it, run `yarn serve`.

<br>

## Project structure

Once the dependendencies have been installed, the project structure is:

    .
    ├── node_modules
    │    └── (many stuff)
    ├── src
    │    ├── components
    │    ├── constants
    │    ├── views
    │    ├── App.tsx
    │    ├── index.html
    │    └── index.tsx
    ├── .babelrc.json
    ├── .dockerignore
    ├── .eslintrc.json
    ├── .gitignore
    ├── .prettierrc.json
    ├── docker-compose.yml
    ├── Dockerfile
    ├── global.d.ts
    ├── jest.config.js
    ├── jest.setup.js
    ├── LICENSE
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    ├── webpack.config.js
    └── yarn.lock

<br>

## Files information

- **`/node_modules`**: This directory contains all of the modules of code (npm packages) that the project depends on.

- **`/src`**: This directory contains all of the app's source code.

  - `/components`: This folder contains files that represent reusable UI pieces.

  - `/constants`: This folder contains files that represent constant values used by components.

  - `/views`: This folder contains the views of the application, which are larger components made up of smaller components.

  - `App.tsx`: This is the root component that contains all other components and views.

  - `index.html`: This is the template HTML file that will contain the React app.

  - `index.tsx`: This component defines where in the `index.html` template the `App.tsx` component is placed and rendered.

- **`.babelrc.json`**: A configuration file for [Babel](https://babeljs.io), a JavaScript compiler.

- **`.dockerignore`**: A file that tells [Docker](https://www.docker.com/) which files it should not include in a image.

- **`.eslintrc.json`**: A configuration file for [ESLint](https://eslint.org), a linting utility for JavaScript, TypeScript, and React.

- **`.gitignore`**: A file that tells [Git](https://git-scm.com) which files it should not track / not maintain a version history for.

- **`.prettierrc.json`**: A configuration file for [Prettier](https://prettier.io), a code formatter.

- **`docker-compose.yml`**: A file that defines the [Docker](https://www.docker.com/) services to run and its configuration.

* **`Dockerfile`**: A file that specifies the instructions to build a [Docker](https://www.docker.com/) image.

- **`global.d.ts`**: A file that declares special modules that are used in the project to [TypeScript](https://www.typescriptlang.org).

- **`jest.config.js`**: A configuration file for [Jest](https://jestjs.io), a JavaScript testing framework.

- **`jest.setup.js`**: A setup file for [Jest](https://jestjs.io), a JavaScript testing framework.

- **`LICENSE`**: The license under which this repository is released.

- **`package.json`**: A file which includes things like the project’s name, author, dependencies, etc. This file is how yarn/npm knows which packages to install for the project.

- **`README.md`**: A file containing information about the project.

- **`tsconfig.json`**: A configuration file for [TypeScript](https://www.typescriptlang.org), a typed superset of JavaScript that compiles to plain JavaScript.

- **`webpack.config.js`**: A configuration file for [webpack](https://webpack.js.org), a static module bundler for JavaScript applications.

- **`yarn.lock`**: An automatically generated file based on the exact versions of the npm dependencies that were installed for the project. **(Don’t change this file directly).**

<br>

## Contributing

Feel free to contribute if you think something can be improved in any way.

<br>

Happy coding ⚡
