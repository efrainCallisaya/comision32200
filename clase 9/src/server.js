import express from 'express';
import router from './routes/index.js';
const app = express();
const PORT = 8080;
app.use("/",router);
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto 8080`);
});