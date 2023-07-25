import { ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://prosapac.com/graphql',
    cache: new InMemoryCache(),
  });

export default client;