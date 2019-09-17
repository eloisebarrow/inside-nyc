const { Destination, User } = require('./models');
const data = require('./data');


const genDestinations = async () => {
  try {
    const destinations = await Destination.bulkCreate(data);
  } catch (e) {
    console.log(e.message);
  }
};

const genUser = async () => {
  try {
    const testUser = await User.create({
      username: 'test@gmail.com',
      nickname: 'user1',

    });
  } catch(e) {
    console.log(e.message)
  }
};

const main = async () => {
  await Destination.destroy({
    where: {},
  });
  await genDestinations();
  // await genUser();
  process.exit();
};

main();
