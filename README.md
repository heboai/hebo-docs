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

### Customization

The search functionality can be customized by modifying the Pagefind configuration in your code. Refer to the [Pagefind documentation](https://pagefind.app/docs/) for available options.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Recommended version: `18.x` or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [SST CLI](https://sst.dev/docs/installation) installed globally:
  ```bash
  npm install -g sst
  ```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/heboai/hebo-docs.git
   cd hebo-docs
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

Start the SST development environment:
```bash
   sst dev
```

### Deployment

The project is deployed using SST.dev with AWS and Cloudflare DNS. The deployment is configured in `sst.config.ts`.

#### Manual Deployment

To deploy manually:

```bash
sst deploy --stage TARGET_ENV
```

#### Automated Deployment

The project uses GitHub Actions for automated deployments. When changes are merged into the main branch, the workflow automatically:

1. Builds the Next.js application
2. Deploys to AWS using SST
3. Updates Cloudflare DNS records

The deployment is configured to use the custom domain `docs.hebo.ai`.

### Contributing

1. Fork the repository
2. Create your feature branch
3. Submit a pull request
