import './globals.css'
import { Header, SideMenu } from '@/components'
import Footer from '@/components/footer'
import { Inter } from 'next/font/google'
import { ApolloWrapper } from '@/lib/apollo-wrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pros-Apac Corporation',
  description: `Philippine's leading dental distributor`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="pac">
      <body className={inter.className}>
        <ApolloWrapper>
          <Header />
          <SideMenu />
          {children}
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  )
}



