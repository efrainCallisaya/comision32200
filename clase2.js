
const log = (p) => console.log(p)
import fetch from 'node-fetch'

// function mostrar(param){
//     return 'a'
// }

// const mostrar = param => {
//     return 'a'
// }

// const mostrar = param => 'a'

// const sumar = (a, b) => a + b

// function sumar(a, b) {
//     return a+b
// }


// const mostrar = param => console.log(param)

// const mostrar = param => {
//     return console.log(param)
// }

// const mostrar = param => {
//     console.log(param)
// }

//console log
//undefined

//Ejemplo de return implicto

// const promediar = (a,b) => (a + b) / 2
// const p = promediar(4,8)
// console.log(p)

// const multiplicar = (a,b) => (a * b)

// console.log(multiplicar(3,3))

// log('a')


// const ejecutar = unaFuncion => unaFuncion()

// const saludar = () => log('saludos')

//saludar() ==> ejecutar

// ejecutar(saludar)

// ejecutar(()=>log('prueba'))
// ejecutar(()=>{

//     log('232131')
//     log('aa')
//     log('vv')
// })

// const ejecutar = (unaFuncion, param) => {

//     //Aqui tuvieramos una funcion muy pesada
//     unaFuncion(param)
// }
// const escribirlog = nombre => log(`FECHA DE TERMINO: ${nombre}`)


// ejecutar(escribirlog, 'Ana')


// EJEMPLO EN VIVO
// const operacion = ( val1 , val2, ope) => {
//     return ope(val1, val2)
// }

// const suma = (x, y) => x / y

// log( operacion(90, 20, suma)  )


//PROMESAS

// const dividir = (dividendo, divisor) => new Promise((res, rej)=>{
//     if(divisor === 0) {
//         rej('El divisor no puede ser 0')
//     }else {
//         res(20)
//     }
// })

// dividir(4,2)
//     .then(res=>log(`resultado: ${res}`))
//     .catch(err=> log(err))

// dividir(10,0)
//     .then(res=>log(`resultado: ${res}`))
//     .catch(err=> log(err))


// Promise.reject(30)
// .then( x => x + 1 )
// .then( x => 22 )
// .then( x => {
//     if(x==22) throw 'Error Coderhouse'
//     else return 80
// })
// .then( x => 30 )
// .then( x => x / 2 )
// .then( log )
// .catch( log )

// asincronismo



// log('inicio del programa - 119')

// const escribirArchivo = (nombre, cb) => setTimeout(()=>{ cb() }, 2000)

// escribirArchivo('Archivo Coderhouse', () => {
//     ///AQUI YO SE QUE ACABO DE ESCRIBIR MI ARCHIVO
//     setTimeout(()=>{ 
//         //AQUI EJECUTO OTRA OPERACION ASINCRONA
//         log(`operacion - 127`)

//         setInterval(()=>{ 
//             //esto es iterativo
//             log(`iterativo - 131`)
    
//         }, 1000)

//     }, 3000)

//     log('Termine de escribir mi archivo - 137')
    
// })

// log('fin del programa - 141')

///return
// const a = (param) => {

//     if(param > 10)
//     { 
//         return
//     }

//     log(`Mi parametro es ${param}`)
// }


// log(a(11))


//cb

// const operacion = ( val1 , val2, ope) => ope(val1, val2) + 1

// const suma = (x, y) => {
//     return x + y
// }

// log( operacion(90, 20, suma)  )

// function sum(...numbers) {
//     let total = 0
//     for(const number of numbers) {
//         total += number;
//     }
//     return total
// }

// log(sum(1,2,3,4,5,6,7,8,9,10,11,12))


// log('inicio del programa - 119')

// const escribirArchivo = (nombre, cb) => setTimeout(()=>{ cb() }, 2000)

// escribirArchivo('Archivo Coderhouse', () => {
//     ///AQUI YO SE QUE ACABO DE ESCRIBIR MI ARCHIVO
//     setTimeout(()=>{ 
//         cb() 
//     }, 2000)
//     log('Termine de escribir mi archivo - 137')
// })

// escribirArchivo('Archivo Coderhouse')
//     .then()
//     .then()

// log('fin del programa - 141')

// const prueba = () => Promise( (res, rej) => {
// res()
// })

// prueba.then(()=>{
//     loading.false
// })

/* 
//FUNCION CON PROMESAS
fetch('https://httpbin.org/post', {method: 'POST', body: 'a=1'})
    .then(res=> {
        log(res)
        return res.json()
    })
    .then(res=> log(res.data))
    */