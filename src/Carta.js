import React , {Component} from  'react'
import './Carta.css'
import Flip from 'react-flipcard'

class Carta extends Component {
    render(){
        return (
            <div className="carta" onClick={this.props.seleccionarCarta} >
                <Flip 
                    flipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
                    disabled={true}>
                    <div className="portada"></div>
                    <div className="contenido">
                        <i className={ `fa ${this.props.icono} fa-5x`  }></i>
                    </div>
                </Flip>
                
            </div>
        )
    }
} 


export default Carta