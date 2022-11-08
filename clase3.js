const log = p => console.log(p)

// const delay = ret => {
//     for(let i = 0; i< ret*3e6; i++);
// }

// function hacerTarea(num){
//     log(`haciendo tarea ${num}`)

//     delay(100)
// }

// log('inicio')
// hacerTarea(1)
// hacerTarea(2)
// hacerTarea(3)
// hacerTarea(4)
// log('fin')
// log('otras')


// function hacerTarea(num, cb) {
//     log('haciendo tarea ' + num)
//     setTimeout(cb,100)
// }

// log('inicio de tareas');
// hacerTarea(1, () => {
//     hacerTarea(2, () => {
//         hacerTarea(3, () => {
//             hacerTarea(4, () => {
//                 log('fin de tareas')
//             })
//         })
//     })
// })
// log('otras tareas ...')// esta en paralelo con la 1


//DESAFIO GENERICO 1
// function mostrarLetras(palabra, terminar){
//     let i = 0
//     const timer = setInterval(() => {
//         // si estamos dentro de la palabra
//         if(i < palabra.length){
//             log(palabra[i]);
//             i++;
//         }
//         else {
//             //limpiamos el intervalo
//             clearInterval(timer)
//             terminar()
//         }
//     }, 1000);

// }

// const fin = () => log('termine')


// setTimeout(() => { mostrarLetras('Hola', fin) }, 0 )
// setTimeout(() => { mostrarLetras('Queso', fin) }, 250 )
// setTimeout(()=> { mostrarLetras('Casa', fin) }, 500 )

// const circulo = require('./circulo.js')

// log(circulo.area(4))


//Manejo de archivos
const fs = require('fs')

// const data = fs.readFileSync('./prueba.txt', 'utf8')

// fs.writeFileSync('./prueba.txt', '  \nHOLA')

//fs.appendFileSync('./prueba.txt', '\n\n\nUNA NUEVA LINEA')

// fs.unlinkSync('./prueba.txt')

// try {
//     fs.readFileSync('./prueba.txt')
// } catch (error) {
//     log(`soy un error : ==>  ${error}`)
// }
// log(data)

//DESAFIO GENERICO 2
//A 
//B
//C
// try {
    
//     fs.writeFileSync('fyh.txt', new Date().toLocaleString())
// } catch (error) {
//     throw new Error(`Error al escribir ${error}`)
// }

// try {
    
//     const contenido = fs.readFileSync('index.js', 'utf-8')
//     log(contenido)
// }
// catch (error) {
//     throw new Error(`Error al leer ${error}`)
// }

// FS con callbacks

// fs.readFile('./fyh.txt', 'utf8', function(err, datos) {
//     //si hay error
//     if(err){
//         log(err)
//         return
//     }

//     //si no hay error
//     log(datos)
// })

// fs.writeFile('./fyh.txt', 'NUEVO TEXTO dos', function(e) {
//     //si hay error
//     if(e){
//         log(e)
//         return
//     }
// })

// fs.appendFile('./fyh.txt', '\n\n\nappended text as', error => {
//     if(error) {
//         log(error)
//     }else {
//         log('terminado')
//     }
// })

// fs.unlink('./fyh.txt', error => {
//     if(error) {
//         log(error)
//     }else {
//         log('Archivo Borrado')
//     }
// })

// fs.mkdir('./carpeta2', function(err) {
//     if(err) {
//         log(err)
//     }else {
//         log('Carpeta creada')
//     }
    
// })

// fs.readdir('./carpeta2', (err, nombres)=>{
//     log(nombres)
// })

//desafio 3


//fs con promessas

// const leerTC = () => {
//     fs.promises.readFile('./prueba3.txt', 'utf8')
//     .then(cont=> log(cont))
//     .catch(err=>log(err))
// }

// leerTC()
/* 
const leerAA = async () => {
    try {
        const contenido = await fs.promises.readFile('./prueba3.txt', 'utf8')
        log(contenido)
    } catch (error) {
        log(error)
    }
}
leerAA()


*/




