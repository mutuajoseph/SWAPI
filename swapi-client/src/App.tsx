import React from 'react';
import logo from './logo.svg';
import './App.css';

import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"

import People from './components/People';


const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <People />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;