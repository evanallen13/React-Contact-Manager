import React from 'react';
import './App.css';
// Installed
import { BrowserRouter as Router, Route} from 'react-router-dom'
import ApolloClient from 'apollo-boost';
import { ApolloProvider  } from 'react-apollo'
// Components
import Homepage from './components/Homepage'
import Contact from './components/Contact'
import Add from './components/Add'
import Edit from './components/Edit'

const client = new ApolloClient({
  uri : 'https://api-uswest.graphcms.com/v1/ck1l3bz8q2nt401dfguxh6ppc/master'
})


export default function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
          <Router>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/add' component={Add}/>
            <Route exact path='/edit' component={Edit}></Route>
            <Route exact path='/contact/:id' component={Contact}/>
          </Router>
      </ApolloProvider>
    </div>
  );
}

