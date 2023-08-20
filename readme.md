# Hola Paisano, this is paisaflix!

Este repo contiene mi resultado del challenge de paisaflix cuya presentanción podrás encontrar en presentacion.pdf

<p align="center"><img src="./screenshot.png?raw=true"></p>

## Features and Functioning

- Complete responsive and animate design
- Multilanguage support (EN/ES included)
- Own backend to get more and better data
- Login/Register implementation with Refresh Token + Access Token in Memory
- Static + Dynamic use of API
- Infinite Loading for movies
- Interactive Movie Modals (Similar to Netflix)
- Use of Typescript both for frontend and backend

## Installation and Usage

Make your own fork of the repo or clone it with:

```
git clone https://github.com/danihv/paisaflix
```

Now, install the dependencies (you must use Yarn, since it use Yarn Workspaces). Before run both backend and frontend, you must create .env for both of them using the .env.example inside each folder, and have a MySQL database for the backend. After that, you can import mocks genres, movies and trailers to your database using the following command:

```
yarn backend import-mocks
```

With your dependencies, env config and imported data, you can run both the frontend and backend as development with:

```
yarn dev
```

Or build and serve directly with:

```
yarn build && yarn start
```

## Development Stack (and relevant dependencies)

- React.js + Next.js
- Typescript
- Emotion React + Styled
- Framer Motion
- Koa
- Graphql + Apollo Client + Apollo Server
- TypeORM + MySQl

## License

[MIT](https://choosealicense.com/licenses/mit/)
