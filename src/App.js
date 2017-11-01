import React, { Component } from 'react';
import './App.css';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Scrapbook from './ui/scrapbook'

const client = new ApolloClient({
  link: new HttpLink({uri: 'https://api.graph.cool/simple/v1/cj9aevygn0k240139xhkhjavg' }),
  cache: new InMemoryCache()
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div className="App">
        <Scrapbook />
      </div>
    </ApolloProvider>
    );
  }
}

export default App;
