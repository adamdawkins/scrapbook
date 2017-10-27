import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Hello from './ui/hello';

const client = new ApolloClient({
  link: new HttpLink({uri: 'https://api.graph.cool/simple/v1/cj9aevygn0k240139xhkhjavg' }),
  cache: new InMemoryCache()
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Hello />
      </div>
    </ApolloProvider>
    );
  }
}

export default App;
