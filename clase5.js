import http from "http";
import moment from "moment";

const PORT = 8080;
let texto =''
const server = http.createServer((peticion, respuesta) => {
  let currentH = moment().format('HH')
  console.log(currentH)
  if (currentH >=6 && currentH<=12){
    texto="buenos dias"
  }else if (currentH >=13 && currentH<=19){
    texto="buenos tardes"
  }else if (currentH >=20 || currentH<=5){
    texto="buenos noches"
  }
  respuesta.end(texto)
});

const connectedServer = server.listen(PORT, () => {
  console.log(
    `servidor http escuchando en el puerto  ${connectedServer.address().port}`
  );
});
