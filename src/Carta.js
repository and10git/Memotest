import React, { Component } from 'react';
import './Carta.css';
import ReactCardFlip from "react-card-flip";

export default class Carta extends Component {
    render() {
        return (
            <div className='carta' onClick={this.props.seleccionarCarta}>
                <ReactCardFlip
                    isFlipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
                    disabled={true}
                >
                    <div className='portada' key="front"></div>
                    <div className='contenido' key="back">
                        <i className={`fa ${this.props.icono} fa-5x`}></i>
                    </div>
                </ReactCardFlip>
            </div>
        )
    }
}