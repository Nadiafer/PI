const { Router } = require('express');
const genres = require('./genreRouter');
const game1 = require ()
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use ('/videogames', games);
router.use ('/genres', genres);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);




module.exports = router;
