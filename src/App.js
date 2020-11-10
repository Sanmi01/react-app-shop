import React, { Component } from 'react';
// import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Displayshoes from './components/DisplayShoes';
import './App.css';
import { SHOES } from './components/shoes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoes: SHOES
    };

  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Shoes</NavbarBrand>
          </div>
        </Navbar>
        <Displayshoes shoes={this.state.shoes} />
      </div>
    )
  }

}

export default App;
