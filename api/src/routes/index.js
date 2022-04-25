const { Router } = require('express');
const genres = require('./genreRouter');
const games = require('./videogamesRouter');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use('/videogames', games);
router.use('/genres', genres);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', (req, res) => {
    return res.send('todo okey')
});


module.exports = router;
