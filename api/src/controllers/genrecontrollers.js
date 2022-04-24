const {Videogame, Genre} = require ('../db.js');
const axios = require('axios');

const getGenre = async (req, res) =>{
  try{
    let genre = await axios.get ('https://api.rawg.io/api/genres?key=1216c263efa84e7db06b03f5daa18f61');
    let response = genre.data.results?.map((ge) =>{
      return {
        id: ge.id,
        name: ge.name,
      }
    })
    response.forEach ((ge) =>{
      Genre.findOrCreate({
        where:{
          id: ge.id,
          name: ge.name,

        }
      })
    })
    res.send(response)

    

  } catch (e){
    console.error(e)
  }
}

module.exports = {  
  getGenre

}
