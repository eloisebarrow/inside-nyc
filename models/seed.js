const { Destination } = require('./models');
const data = require('./data');


const genDestinations = async () => {
  try {
    const destinations = await Destination.bulkCreate(data);
  } catch (e) {
    console.log(e.message);
  }
};

const main = async () => {
  await Destination.destroy({
    where: {},
  });
  await genDestinations();
  await Destination.bulkCreate(data);
  process.exit();
};

main();
