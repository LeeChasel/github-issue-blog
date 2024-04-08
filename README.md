# Blog Website Powered by GitHub Issues

This project is a blog website that uses GitHub Issues as the content management system. It allows you to create, update, and manage your blog posts directly from your GitHub repository's issues.

## How to use

### Setup

1. Rename the `.env.example` file to `.env.local`. This file is used to store environment variables that are necessary for the application to run.

2. Fill in the environment variables in the `.env.local` file:

   - `REPO_OWNER`: The username of the GitHub account that owns the repository.
   - `REPO_NAME`: The name of the GitHub repository where the issues (blog posts) are stored.
   - `AUTH_GITHUB_ID`: The GitHub App's client ID.
   - `AUTH_GITHUB_SECRET`: The GitHub App's client secret.
   - `AUTH_SECRET`: A secret key used for authentication.

### Running the Website

After setting up the environment variables, you can run the website locally using the following command:

```bash
pnpm install
# then
pnpm dev
```

This project uses `pnpm` as the package manager, but you can also use other tools like `npm`, or `yarn` to start the application:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

# Build

For a better experience, it is recommended to use the build version of the application. You can build and start the application using the following commands:

```bash
pnpm build
# then
pnpm start
```

# Architecture design

- nextjs 14 app router to build react server component(RSC)
  - Streaming UI and skeleton to improve waiting experence in all pages.
  - Server action to fetch data in server although in client component.
- [t3-oss/env-nextjs](https://github.com/t3-oss/t3-env) to validate all environment variables are appropriate setting.

- zod to validate runtime data are safe type.
- react-hook-form to manage client side form state.
- next-auth v5-beta to store login jwt in server side, and other authentication.
- react-markdown to transfor markdown string to react component.
- shadcnUI and tailwindcss as css library.
