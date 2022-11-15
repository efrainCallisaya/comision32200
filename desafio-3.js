import Contenedor from "./desafio-2.js";

import express from "express";
const app = express();
const PORT = 8080;
const documento = new Contenedor("productos.txt");
app.get("/productos", async (req, res) => {
  let data = await documento.getAll();
  res.send(data);
});
app.get("/productoRandom", async (req, res) => {
  res.send(await documento.getRandom());
});
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
