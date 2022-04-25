const { Router } = require('express');
const { getAllGames } = require('../controllers/gamescontrollers');
// Importar todos los routers;
//localhost:3000/videogames/otracosa(desde el front)



const videosGamesRouter = Router();

// Configurar los routers

videosGamesRouter.get('/', getAllGames)


module.exports = videosGamesRouter;