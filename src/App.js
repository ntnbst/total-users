import Layout from './components/Layout'
import './App.css';
import TextInput from './components/TextInput';
import InnerLayout from './components/InnerLayout';
import Button from './components/Button';
import RememberMe from './components/RememberMe';
import Login from './components/Login';
import { useState } from 'react';
import Register from './components/Register';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Users from './components/Users';

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <InnerLayout>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/users" component={Users} />
            <Route component={() => <h1>Page Not Found</h1>} />
          </Switch>
        </InnerLayout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;