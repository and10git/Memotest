import React, { Component } from 'react';
import './Tablero.css';
import Carta from './Carta';

export default class Tablero extends Component {
    render() {
        return (
            <div className='tablero'>
                {
                    this.props.baraja.map((carta, index) => {
                        const estaSiendoComparada = this.props.parejaSeleccionada.indexOf(carta) > -1
                        return <Carta
                            key={index}
                            icono={carta.icono}
                            estaSiendoComparada={estaSiendoComparada}
                            seleccionarCarta={() => this.props.seleccionarCarta(carta)}
                            fueAdivinada={carta.fueAdivinada}
                        />;
                    })
                }
            </div>
        )
    }
}