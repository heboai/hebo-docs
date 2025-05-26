import Image from 'next/image'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
 
export const metadata = {
  title: 'Hebo Docs',
  description: 'Hebo Docs',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    shortcut: ['/favicon.ico']
  },
  openGraph: {
    title: 'Hebo Docs',
    description: 'Hebo Documentation',
    images: [
      {
        url: '/hebo icon.png',
        width: 1200,
        height: 630,
        alt: 'Hebo Documentation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hebo Docs',
    description: 'Hebo Documentation',
    images: ['/hebo icon.png'],
  },
}
 
const banner = <Banner storageKey="some-key">Hebo Evals is  finally released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<div style={{display: 'flex', alignItems: 'center', gap: '10px', flexDirection: 'row', justifyContent: 'center'}}>
        <b>Hebo</b> <Image src="/hebo icon.png" alt="Hebo" width={15} height={15} style={{borderRadius: '50%'}}/></div>}
    logoLink="/"
    projectLink='https://github.com/heboai/hebo'
    chatLink='https://discord.com/invite/cCJtXZRU5p'
  />
)
const footer = <Footer>All rights reserved. {new Date().getFullYear()} © Hebo.</Footer>
 
export default async function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/heboai/hebo-docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}