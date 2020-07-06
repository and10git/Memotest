import shuffle from 'lodash.shuffle';
import FontAwesomeClasses from './FontAwesomeClasses';

const NUMERO_DE_CARTAS = 20;

export default () => {
    const fontAwesomeClasses = FontAwesomeClasses()
    let cartas = []

    while (cartas.length < NUMERO_DE_CARTAS) {
        const index = Math.floor(Math.random() * fontAwesomeClasses.length)
        const carta = {
            icono: fontAwesomeClasses.splice(index, 1)[0],
            fueAdivinada: false
        }

        cartas.push(carta)
        cartas.push({ ...carta }) //clono el objeto, tienen la misma propiedad pero no es otro objeto, sino serian las mismas cartas.
    }

    return shuffle(cartas)
}