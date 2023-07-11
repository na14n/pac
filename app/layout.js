import './globals.css'
import { Header } from '@/components'
import { Inter } from 'next/font/google'

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const inter = Inter({ subsets: ['latin'] })

const client = new ApolloClient({
  uri: 'https://prosapac.com/graphql',
  cache: new InMemoryCache(),
});

client.query({
  query: gql`
    query GetPosts {
      posts {
        nodes {
          date
          title
          content
        }
      }
    }
    `,
  })
.then((result) => console.log('RESPONSE: ', result.data.posts));

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



