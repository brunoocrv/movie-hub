## movie hub

- With this project, you can see popular and upcoming movies, and search a specific movie.

- This project was builted with NextJS, Typescript, TailwindCSS, Vitest, React testing library and Cypress.

[deployed at vercel](https://movie-hub-virid.vercel.app/)

Install dependencies
```
npm install
```


**Before run the application, you need to create a ``.env`` file following the ``.example.env`` . The variable API_TOKEN have to be your token from [themovieDB](https://www.themoviedb.org/)**


Run the application
```
npm run dev
```

Run unitary tests
```
npm run test --all
```

Run E2E tests (the application must to be running)
```
npx cypress open
```
