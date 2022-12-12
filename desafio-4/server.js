import express from 'express';
import { create } from 'express-handlebars';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(process.env.PORT || PORT, () => console.log(`Server listening on PORT ${PORT}`));
server.on('error', err => console.log(`Error: ${err}`));

const hbs = create();
 
app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

app.set('views', './views');

let productos = [];

app.get('/productos', (req, res) => {
    res.render('view/index', { productos });
})

app.post('/productos', (req, res) => {
    const { producto, precio, urlImagen } = req.body;
    productos.push({ producto, precio, urlImagen });
    res.redirect('/productos')
});



