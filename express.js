import express from 'express';
import moment from 'moment';

const app = express();

const PORT = 8080;
let visitas=0;
let currentH = moment().format('DD-MM-YYYY')

const server = app.listen(PORT,()=>{
    
    console.log(`servidor prendido${PORT}`)
});

//RUTAS
app.get('/',(req,res)=>{
    visitas++
    res.send(`<h1 style="color:blue">Que ondaaaaa =) todo tranqui _???</h1>`);
})
//RUTAS
app.get('/visitas',(req,res)=>{
    res.send(`la cantidad de visitas que tuvo tu home es ${visitas}`)
})
//RUTAS
app.get('/fechayhora',(req,res)=>{
    res.send(`la fecha y hora es : ${currentH} `)
})

