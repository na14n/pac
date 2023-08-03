import './globals.css'
import { Header, SideMenu } from '@/components'
import Footer from '@/components/footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pros-Apac Corporation',
  description: `Philippine's leading dental distributor`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="pac">
      <body className={inter.className}>
        <Header />
        <SideMenu />
        {children}
        <Footer />
      </body>
    </html>
  )
}



