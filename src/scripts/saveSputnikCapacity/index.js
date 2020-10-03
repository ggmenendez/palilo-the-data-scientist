const { ServiceSputnik } = require('../../services');
const { ModelCapacity } = require('../../models');

module.exports = async () => {
  console.log('Requesting Sputnik capacity...');
  const { code, data } = await ServiceSputnik.capacity();
  if (code === 200) {
    console.log('...Requested! Saving it...');
    const capacity = new ModelCapacity({ people: data.People, capacity: data.Capacity });
    await capacity.save();
    console.log('Saved!');
  } else {
    console.log('There has been an error getting the current Sputnik capacity');
  }
};