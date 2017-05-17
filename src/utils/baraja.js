import cart from './font'
const NUMERO_CARTAS = 20
function baraja () {

    let cartas = []

    while (cartas.length < NUMERO_CARTAS) {
        const index = Math.floor(Math.random() * cart.length)
        const carta = {
            icono: cart.splice(index,1)[0],
            encontrada: false
        }
        cartas.push(carta)
        cartas.push({...carta})
        cartas = cartas.sort(()=>{
            return Math.random() - 0.5
        }) 
        
    }
    return cartas
}

export default baraja