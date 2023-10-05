import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  // uri: process.env.WP_API_URL,
  // uri: "https://prosapac.com/main/graphql",
  uri: process.env.NEXT_PUBLIC_WP_API_URL,
  cache: new InMemoryCache(),
});

export default client;