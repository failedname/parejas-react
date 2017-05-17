import React, { Component } from 'react';
import Header from './Header';
import Tablero from './Tablero';
import baraja from './utils/baraja'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      baraja: baraja(),
      parejaSeleccionada: [],
      estaComparando: false,
      numeroDeIntentos: 0
    
  }
  }
  render() {
    return (
      <div>
        <Header intentos={this.state.numeroDeIntentos}  reset={this.resetearPartida.bind(this)}/>
        <Tablero baraja={this.state.baraja} 
          parejaSeleccionada= {this.state.parejaSeleccionada}
          seleccionarCarta={this.seleccionarCarta.bind(this)}
        />
      </div>
    );
  }
  seleccionarCarta(){
    if (
      this.state.estaComparando ||
      this.state.parejaSeleccionada.indexOf(arguments[0]) > -1 ||
      arguments[0].encontrada
    ) {
      return;
    }

    const parejaSeleccionada = [...this.state.parejaSeleccionada, arguments[0]];
    this.setState({
      parejaSeleccionada
    });

    if (parejaSeleccionada.length === 2) {
      this.compararPareja(parejaSeleccionada);
    }
  }
  compararPareja(parejaSeleccionada) {
    this.setState({estaComparando: true});

    setTimeout(() => {
      const [primeraCarta, segundaCarta] = parejaSeleccionada;
      let baraja = this.state.baraja;

      if (primeraCarta.icono === segundaCarta.icono) {
        baraja = baraja.map((carta) => {
          if (carta.icono !== primeraCarta.icono) {
            console.log(carta)
            return carta;
          }

          return {...carta, encontrada: true};
        });
      }

      this.verificarSiHayGanador(baraja);
      this.setState({
        parejaSeleccionada: [],
        baraja,
        estaComparando: false,
        numeroDeIntentos: this.state.numeroDeIntentos + 1
      })
    }, 1000)
  }
  verificarSiHayGanador(baraja) {
    if (
      baraja.filter((carta) => !carta.encontrada).length === 0
      
    ) {
      alert(`Ganaste en ${this.state.numeroDeIntentos} intentos!`);
    }
  }
  
  resetearPartida() {
    this.setState(
      {
        baraja: baraja(),
        parejaSeleccionada: [],
        estaComparando: false,
        numeroDeIntentos: 0 
      }
    );
  }
}

export default App;
