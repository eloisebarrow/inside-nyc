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
  latitude: Sequelize.INTEGER,
  longitude: Sequelize.INTEGER,
  image_url: Sequelize.STRING,
  type: Sequelize.STRING
}, {
  sequelize: db,
  modelName: 'destination'
});

class User extends Sequelize.Model {}
User.init({
  username: Sequelize.STRING,
  nickname: Sequelize.STRING,
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

class Favorite extends Sequelize.Model {}
Favorite.init({

}, {
  sequelize: db,
  modelName: 'favorite'
});

User.hasMany(Favorite, { through: 'user_favorites' });
User.hasMany(Rating, { through: 'user_ratings' });

Favorite.belongsToMany(Destination, { through: 'favorite_destinations' });
Destination.belongsToMany(Favorite, { through: 'destination_favorites' });

Destination.belongsToMany(Rating, { through: 'destination_ratings' });
Rating.belongsToMany(Destination, { through: 'rating_destinations' });

module.exports = {
  db, Destination, Favorite, User, Rating
}
