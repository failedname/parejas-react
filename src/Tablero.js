import React, { Component } from 'react'
import './Tablero.css'
import Carta from './Carta'



class Tablero extends Component{

    render(){
        return(
            <div >
                <div className="tablero">
                {
                    this.props.baraja.map((carta, index) => {
                         const estaSiendoComparada =this.props.parejaSeleccionada.indexOf(carta) > -1;
                         return (<Carta  icono={carta.icono}
                                key={index} 
                                estaSiendoComparada={estaSiendoComparada}
                                seleccionarCarta={this.props.seleccionarCarta.bind(this,carta)}
                                fueAdivinada={carta.encontrada}
                                ></Carta>)} 
                     )
                }
                </div>
           </div> 
        )

    }
}

export default Tablero