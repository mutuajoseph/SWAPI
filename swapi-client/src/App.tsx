import './App.css';

import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import { Routes, Route, Link } from "react-router-dom";

import People from './views/People';
import SinglePerson from './views/SinglePerson';


const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Routes>
          <Route path='/' element={<People />} />
          <Route path='/people/:name' element={<SinglePerson />} />
        </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;
