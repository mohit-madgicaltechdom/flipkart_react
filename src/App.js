// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Home from './components/home/Home'
import Cart from './components/cart/Cart'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import TemplateProvider from "./templates/TemplateProvider"

function App() {
  return (
    <div className="App">
      <TemplateProvider >
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/cart' component={Cart} />
            <Home />
          </Switch>
        </BrowserRouter>
      </TemplateProvider>
    </div>
  );
}

export default App;
