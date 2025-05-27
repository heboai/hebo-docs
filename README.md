# Hebo Documentation

This is the documentation site for Hebo, built with Next.js and Nextra.

## Search Integration

This site uses [Pagefind](https://pagefind.app/) for search functionality. Pagefind is integrated as an npm dependency and is automatically built during the site's build process.

### How it works

1. Pagefind is installed as a dependency via npm:
   ```json
   {
     "dependencies": {
       "pagefind": "^1.0.4",
       "@pagefind/default-ui": "^1.3.0"
     }
   }
   ```

2. The search index is automatically generated during the build process using the `postbuild` script in package.json:
   ```json
   {
     "scripts": {
       "postbuild": "pagefind --site .next/server/app --output-path public/_pagefind"
     }
   }
   ```

3. The search UI is provided by `@pagefind/default-ui` package.

### Development

- During development, the search functionality is available but the index is only generated during the build process.
- To update the search index, run `npm run build` which will trigger the Pagefind index generation.

### Customization

The search functionality can be customized by modifying the Pagefind configuration in your code. Refer to the [Pagefind documentation](https://pagefind.app/docs/) for available options.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Start the production server:
   ```bash
   npm start
   ```

### 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Recommended version: `18.x` or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/heboai/hebo-docs.git
cd hebo-docs
npm install
# or
yarn install
```

### 🚀 Running the Development Server

```bash
npm run dev
# or
yarn dev
```

### 🛠️ Contributing

Fork the repo
```bash
https://github.com/heboai/hebo-docs.git
```

Then open a pull request.

### License
MIT License

