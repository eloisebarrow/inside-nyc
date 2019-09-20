const Sequelize = require('sequelize');

const db = new Sequelize(
  (process.env.DATABASE_URL || 'postgres://localhost:5432/seenyc_db'),
  {
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
  email: {
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
  password_digest: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'user'
});

class Rating extends Sequelize.Model {}
Rating.init({
  rating: Sequelize.INTEGER
}, {
  sequelize: db,
  modelName: 'rating',
  timestamps: false
});

User.belongsToMany(Destination, { through: 'user_favorites' });

User.hasMany(Rating);
Rating.belongsTo(User);

Destination.hasMany(Rating);
Rating.belongsTo(Destination);

module.exports = {
  db, Destination, User, Rating
}
