const log = p => console.log(p)

/**DESAFIO GENERICO 1*/
//0 < 1
// const generarAleatorio = () => parseInt(Math.random() * 20) + 1

// // log(generarAleatorio())

// // salida => objeto

// let salida = {}

// for(let i=0; i < 10000; i++) {// 9999
//     //obtengo mi numero aleatorio
//     let numero = generarAleatorio() //rango del 1 al 20
//     //verifico si mi objeto ya existe
//     if(!salida[numero]) {
//         salida[numero] = 0 // salida[1] = 0
//     }
//     //agrego el contador
//     salida[numero]++; // salida[1] = 1
// }

// log(salida)

/**DESAFIO GENERICO 2*/

// const productos = [
//     { id:1, nombre:'Escuadra', precio:323.45 },
//     { id:2, nombre:'Calculadora', precio:234.56 },
//     { id:3, nombre:'Globo Terráqueo', precio:45.67 },
//     { id:4, nombre:'Paleta Pintura', precio:456.78 },
//     { id:5, nombre:'Reloj', precio:67.89 },
//     { id:6, nombre:'Agenda', precio:78.90 }
// ]

// //A => Escuadra,Calculadora,Globo Terráqueo,Paleta Pintura,Reloj,Agenda
//  const nombres = productos.map(item => item.nombre).join(',')


//B   1207.2500000000002
// let precioTotal = 0

// productos.forEach(item => {
//     precioTotal += item.precio
// })

// const precioTotal = productos.reduce((acc, item) => (acc + item.precio), 0)

// // C 201.20833333333337
// const precioPromedio = precioTotal / productos.length

// const precios = productos.map(item => item.precio)
// // D
// const menorPrecio = Math.min(...precios)
// // E
// const mayorPrecio = Math.max(...precios)

// const redondeo = valor => Number(valor.toFixed(2))

// let info = {
//     nombres: nombres,
//     total: redondeo(precioTotal),
//     promedio: redondeo(precioPromedio),
//     minimo: menorPrecio,
//     maximo: mayorPrecio
// }

// log(info)


/**DESAFIO GENERICO 3*/
/*
const moment = require('moment')

const hoy = moment()
log(typeof (hoy.format('DD-MM-YYYY')))

const nacimiento = moment('24/03/1982', 'DD/MM/YYYY')

let cantidadDeDias =  hoy.diff(nacimiento, 'days')

let cantidadDeAnios =  hoy.diff(nacimiento, 'years')

log(`

Hoy es ${hoy.format('DD-MM-YYYY')}
Naci el ${nacimiento.format('DD-MM-YYYY')}
Desde mi nacimiento han pasado ${cantidadDeDias} dias
Desde mi nacimiento han pasado ${cantidadDeAnios} anios

`)
*/