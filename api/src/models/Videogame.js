const { DataTypes, UUID } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey: true,
    },
       
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    release:{
      type: DataTypes.DATE,
      allowNull: false,
    },
    rating:{
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    platforms:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdBD:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
  });
};
