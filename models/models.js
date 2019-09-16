const Sequelize = require('sequelize');

const db = new Sequelize({
  database: 'seenyc_db',
  dialect: 'postgres',
  define: {
    underscored: true
  }
});

class Destination extends Sequelize.Model {}
Destination.init({
  name: Sequelize.STRING,
  borough: Sequelize.STRING,
  address: Sequelize.STRING,
  website: Sequelize.STRING,
  description: Sequelize.STRING,
  latitude: Sequelize.DECIMAL,
  longitude: Sequelize.DECIMAL,
  image_url: Sequelize.STRING,
  type: Sequelize.STRING
}, {
  sequelize: db,
  modelName: 'destination'
});

class User extends Sequelize.Model {}
User.init({
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  nickname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password_digest: Sequelize.STRING
}, {
  sequelize: db,
  modelName: 'user'
});

class Rating extends Sequelize.Model {}
Rating.init({
  rating: Sequelize.INTEGER
}, {
  sequelize: db,
  modelName: 'rating'
});

User.belongsToMany(Destination, { through: 'user_favorites' });

User.hasMany(Rating);
Destination.hasMany(Rating);

module.exports = {
  db, Destination, User, Rating
}
