<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
=======
# Description

## Lendsqr Dashboard

The Lendsqr Dashboard is a modern web application designed to provide comprehensive insights and management functions for financial institutions. It offers a user-friendly interface that allows administrators and managers to monitor user statistics, manage user data efficiently, and navigate through detailed user profiles.

# Key Features:

- Business Statistics: Visualizes key metrics such as total users, active users, users with loans, and users with savings in a standard dashboard format.
- User Table: Provides a searchable and filterable table view of user data, allowing admin users to view and manage user details, including organization, username, email, phone number, date joined, and status.
- Interactive Filters: Enables admin users to filter user data based on various criteria such as organization, username, email, phone number, date joined, and status.
- Pagination: Supports pagination for efficient navigation through large datasets, enhancing performance and user experience.
- Dropdown Menu: Offers actions such as viewing detailed user profiles, blacklisting users, and activating users via an interactive dropdown menu.
- Responsive Design: Ensures seamless user experience across devices, including desktops, tablets, and mobile phones.


# Technologies Used:

- Frontend: Vite (a React-compatible framework) with TypeScript, Context for state management, React Router for navigation, Sass for styling.
- Testing: Jest with React Testing Library for unit tests.
- API Integration: Fetches user data from backend APIs (using json-generator.com and mocky.io) for dynamic content rendering.
- Development Tools: Git for version control, npm for package management.

# Installation

### Clone the repository

```js

git clone https://github.com/ifetreaty/lendsqr-fe-test.git

```

```js
cd lendsqr-fe-test

```

### Install dependencies

```js
npm install

```

#### or

```js
yarn install

```

# Usage

### Run the development server

```js
npm run dev

```
>>>>>>> develop
