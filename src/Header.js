import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className='titulo'>MEMOTEST</div>
                <div>
                    <button className='boton-reiniciar' onClick={this.props.resetPartida}>
                        Reiniciar
                    </button>
                </div>
                <div className='titulo'>
                    Intentos: {this.props.intentos}
                </div>
            </header>
        )
    }
}