"use client";

import {
    ApolloClient,
    ApolloLink,
    HttpLink,
} from "@apollo/client";
import {
    NextSSRApolloClient,
    ApolloNextAppProvider,
    NextSSRInMemoryCache,
    SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

function makeClient() {
    const httpLink = new HttpLink({
        // https://studio.apollographql.com/public/spacex-l4uc6p/
        uri: "https://prosapac.com/main/graphql",
        // credentials: 'include',
        // credentials: 'same-origin',
        // headers: {
        //     'Content-Type': 'application/json',
        //     // 'Origin' : 'http://localhost:3000',
        //     'Access-Control-Allow-Origin': 'http://localhost:3000',
        //     // 'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Credentials': true,
        //   },
        // fetchOptions: {
        //     mode: 'no-cors'
        // }
    });

    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(
            {
                typePolicies: {
                    Query: {
                        fields: {
                            feed: {
                                keyArgs: false,
                                merge(existing = [], incoming) {
                                    return [...existing, ...incoming]
                                }
                            }
                        }
                    }
                }
            }
        ),
        link:
            typeof window === "undefined"
                ? ApolloLink.from([
                    new SSRMultipartLink({
                        stripDefer: true,
                    }),
                    httpLink,
                    
                ])
                : httpLink,
        
    });
}

export function ApolloWrapper({ children }) {
    return (
        <ApolloNextAppProvider makeClient={makeClient}>
            {children}
        </ApolloNextAppProvider>
    );
}