import './globals.css'
import { Header, SideMenu } from '@/components'
import Footer from '@/components/footer'
import { Inter } from 'next/font/google'
import { ApolloWrapper } from '@/lib/apollo-wrapper'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import SearchBanner from '@/components/SearchBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pros-Apac Corporation',
  description: `Philippine's leading dental distributor`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="pac">
      <body className={inter.className}>
        <ToastContainer />
        <ApolloWrapper>
          <Header />
          <SideMenu />
          <SearchBanner />
          {children}
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  )
}



