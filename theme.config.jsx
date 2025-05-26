export default {
  logo: <span>Hebo Documentation</span>,
  project: {
    link: 'https://github.com/yourusername/hebo-docs',
  },
  docsRepositoryBase: 'https://github.com/yourusername/hebo-docs',
  useNextSeoProps() {
    return {
      title: 'Hebo Documentation',
      defaultTitle: 'Hebo Documentation',
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Hebo Documentation</title>
    </>
  ),
  search: {
    component: null, // This enables the default search component
    placeholder: 'Search documentation...',
  },
} 