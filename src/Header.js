import React, { Component } from 'react';
import './Header.css'


class Header extends Component {
  render(){
    return (
        <nav>
          <div className="nav-wrapper">
            <a href="#" class="brand-logo">Juego de Parejas</a>
            <ul  className="right hide-on-med-and-down">
              <li><a onClick={this.props.reset}>Reiniciar</a></li>
              
              <li><a >Intentos: {this.props.intentos}</a></li>
            </ul>
          </div>
         
        </nav>
    ) 
  }
}


export default  Header

