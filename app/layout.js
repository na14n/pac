import './globals.css'
import { Header } from '@/components'
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
        <div>
          <Header />
        </div>
        {children}
      </body>
    </html>
  )
}



