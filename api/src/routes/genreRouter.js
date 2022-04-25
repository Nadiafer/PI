const { Router } = require('express');
const {getGenre} = require('../controllers/genrecontrollers');
// Importar todos los routers;




const genreRouter = Router();

// Configurar los routers
genreRouter.get('/', getGenre)


module.exports = genreRouter;