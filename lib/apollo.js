import { ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://prosapac.com/graphql',
    cache: new InMemoryCache(),
  });