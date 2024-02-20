This project is an implementation of the [Rick & Morty API Challenge](https://docs.google.com/document/d/10vaYEHCt7JBVZ_TAt_wPm01SSdHr8TDLbRo_-Iew0WE/edit?usp=sharing).

You can preview the project [here](https://rick-and-morty-ten-delta.vercel.app/).

---
## Project Specifications

The specifications provided for building this project were translated into custom UI designs available on this 
[Figma file](https://www.figma.com/file/istTLla66eM1Iu2qRYU8Zp/Rick-and-Morty%3A-Assessment?type=design&node-id=0%3A1&mode=design&t=PJhMgJPENIn7iifU-1). 


Designing user interfaces helps clarify the project's functional requirements and identify any potential gaps or 
ambiguities in the requirements early in the development process. UI designs also help ensure the project is implemented
while prioritizing the needs and preferences of the end-users. 

The project uses **REST** endpoints to interact with the Rick and Morty API. As this is a small project, REST is more 
suited for simplicity and faster performance, compared to **GRAPHQL**. 


---
## Technology Stack
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- [Tailwind](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)

### Additional Plugins
- [GSAP (GreenSock Animation Platform)](https://www.npmjs.com/package/gsap) - CSS animation plugin
- [The Rick and Morty API JavaScript client](https://javascript.rickandmortyapi.com/) - fully typed client that gives access to the Rick and Morty API
- [Vercel Postgres SDK](https://vercel.com/docs/storage/vercel-postgres/sdk) - Vercel plugin that provides an efficient way to interact with a Postgres database.
- [DayJS](https://day.js.org/en/) - parses, validates, manipulates, and displays dates and times for modern browsers
- [useDebounce](https://www.npmjs.com/package/use-debounce) - debouncing search API calls
- [Zod](https://www.npmjs.com/package/zod) - typeScript-first schema declaration and validation library 

---
## Running the project
Build the application:

```bash
npm run dev
# or
yarn dev
```

Start running the application:

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



