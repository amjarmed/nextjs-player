
# nextjs player

----

## traditional

- SSR : server side rendering.

## using modern library (react, vue..)

-CSR: client side rendering

## Problem

- SEO: search engine Optimization (csr)

## nextjs solve it

 after react create final page with data, nextjs create this version in server in case if search robot visit your side it found pages with real data (not empty pages)

## what nextjs offer
  
- SPA + SSR

## start nextjs

- Styling: The different ways to style your application in Next.js.
- Optimizations: How to optimize images, links, and fonts.
- Routing: How to create nested layouts and pages using file-system routing.
- Data Fetching: How to set up a database on Vercel, and best practices for fetching and streaming.
- Search and Pagination: How to implement search and pagination using URL Search Params.

- Mutating Data: How to mutate data using React Server Actions,  and revalidate the Next.js cache.
- Error Handling: How to handle general and 404 not found errors.
- Form Validation and Accessibility: How to do server-side form validation and tips for improving accessibility.
- Authentication: How to add authentication to your application using NextAuth.js and Middleware.
- Metadata: How to add metadata and prepare your application for social sharing.

## project structure

- /app: Contains all the routes, components, and logic for your application, this is where you'll be mostly working from.
- /app/lib: Contains functions used in your application, such as reusable utility functions and data fetching functions.
- /app/ui: Contains all the UI components for your application, such as cards, tables, and forms. To save time, we've pre-styled these components for you.
- /public: Contains all the static assets for your application, such as images.
- Config Files: You'll also notice config files such as next.config.js at the root of your application. Most of these files are created and pre-configured when you start a new project using create-next-app. You will not need to modify them in this course.

## Notes

- navigation between pages
- layout
- Nested Routes : pages/blog/index.js
- Dynamic Routes : pages/posts/[id].js
- Nested Layout : (dashboard/page.tsx =>  app/layout.tsx)
- Data Fetching
- Meta tags
- Data fetching in ssr
- data fetching in csr components : when interactivity is needed, the component must be a Client Component.

### SSG vs SSR vs ISG vs SPA

- SSR refers to rendering a page on the server at every request. This means that the HTML for the page is generated dynamically on the server each time a request is made, and then it’s sent to the client.
- SSG refers to generating the HTML for the page at build time, meaning when the project is built, Next.js generates static HTML files for these pages. These pages are then served statically, so they do not change unless the project is rebuilt.
- ISR builds upon SSG by allowing static pages to be updated periodically without requiring a full rebuild of the site. You can set a revalidation period (in seconds), and Next.js will update the static page in the background when the next request comes after that time. This combines the speed of SSG with the ability to update content.
- SPA refers to a web application where the page is loaded once and further interactions happen via client-side JavaScript. The page does not reload or request new HTML from the server. Instead, it uses client-side routing and AJAX requests to fetch data and dynamically update parts of the page.

## example

   ````js
   // ssr 
   const response= await fetch('https://jsonplaceholder.typicode.com/posts');

// ssg
const response= await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache:'no-cache'
});

// isg : 60s

   const response= await fetch('https://jsonplaceholder.typicode.com/posts', {
    next:{
        revalidate: 60
    }
});
   
   
   
   ```
