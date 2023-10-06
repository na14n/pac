import './globals.css'
import { Header, SideMenu } from '@/components'
import Footer from '@/components/footer'
import { Inter } from 'next/font/google'
import { ApolloWrapper } from '@/lib/apollo-wrapper'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pros-Apac Corporation',
  description: `Philippine's leading dental distributor`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="pac">
      <body className={inter.className}>
        <ToastContainer />
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



