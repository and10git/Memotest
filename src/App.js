import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import Tablero from './Tablero';
import construirBaraja from "./utils/construirBaraja";


const getEstadoInicial = () => {
  const baraja = construirBaraja()
  return {
    baraja,
    parejaSeleccionada: [],
    estaComparando: false,
    intentos: 0,
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = getEstadoInicial()
  }

  seleccionarCarta(carta) {
    if (this.state.estaComparando ||
      this.state.parejaSeleccionada.indexOf(carta) >= 0 ||
      carta.fueAdivinada) {
      return carta;
    }

    const parejaSeleccionada = [...this.state.parejaSeleccionada, carta]
    this.setState({
      parejaSeleccionada
    })

    if (parejaSeleccionada.length === 2)
      this.compararPareja(parejaSeleccionada)
  }

  render() {
    return (
      <div className="App">
        <Header
          intentos={this.state.intentos}
          resetPartida={() => {
            return this.resetPartida();
          }} />
        <Tablero
          baraja={this.state.baraja}
          parejaSeleccionada={this.state.parejaSeleccionada}
          seleccionarCarta={(carta) => this.seleccionarCarta(carta)}
        />
      </div>
    );
  }

  compararPareja(parejaSeleccionada) {
    this.setState({ estaComparando: true })

    setTimeout(() => {
      const [primeraCarta, segundaCarta] = parejaSeleccionada
      let baraja = this.state.baraja

      if (primeraCarta.icono === segundaCarta.icono) {
        baraja = baraja.map((carta) => {
          if (carta.icono !== primeraCarta.icono) {
            return carta
          }
          return { ...carta, fueAdivinada: true }
        })
      }

      this.verificarGanadorPerdedor(baraja);
      this.setState({
        baraja,
        parejaSeleccionada: [],
        estaComparando: false,
        intentos: this.state.intentos + 1,
      })
    }, 1000)
  }

  verificarGanadorPerdedor(baraja) {
    if (this.state.intentos >= 30) {
      alert('PERDISTE! El limite es de 30 intentos!')
      this.resetPartida()
    }
    else if (baraja.filter((carta) => !carta.fueAdivinada).length === 0) {
      alert(`GANASTE! En ${this.state.intentos} intentos!`)
      this.resetPartida()
    }

  }

  resetPartida() {
    this.setState(
      getEstadoInicial()
    )
  }

}

