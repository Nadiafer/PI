const db = require('../db.js');
const {Videogame, Genre} = require ('../db.js');
const axios = require ('axios');


const getAllGames = 
async (req, res) =>{
  return res.send('todo okey')
  
  try {
    const api = await  axios.get('https://api.rawg.io/api/games?key=1216c263efa84e7db06b03f5daa18f61');

  

    const db = await Videogame.findAll({include: Genre});
    if (api || db ){
      let apiResponse = api.data.results?.map((ga) =>{
        return{
          id: ga.id,
          name: ga.name,
          description: ga.description,
          image: ga.image,
          release: ga.released,
          rating: ga.rating,
          platforms: ga.platforms,

        }
      }) 
      let response = [...apiResponse, ...db]
      res.send(response)
    }

    
  } catch (e) {
    console.error(e);
  }

}

const postGame = async (req, res) =>{

}


module.exports = {
  getAllGames,
  postGame
}