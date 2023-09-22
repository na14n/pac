import { ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    // uri: process.env.WP_API_URL,
    uri: "https://prosapac.com/graphql",
    cache: new InMemoryCache(),
  });

export default client;