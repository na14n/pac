import { ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    // uri: process.env.WP_API_URL,
    uri: "https://pac-staging.vercel.app/",
    cache: new InMemoryCache(),
  });

export default client;