import express from'express';

const app = express();

const PORT = 8080

const server = app.listen(PORT,()=>{
    
    console.log(`servidor prendido${PORT}`)
});

//RUTAS
app.get('/api/frase',(req,res)=>{
    const frase =  "hola mundo como estan"
    res.send(frase);
})
//RUTAS
app.get('/api/letras/',(req,res)=>{
    
})