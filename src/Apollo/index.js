import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

const ApolloContext = ({ children }) => {

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
};

export default ApolloContext;