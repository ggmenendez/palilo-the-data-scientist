const axios = require('axios').default;

const getCapacity = async () => {
  const response = await axios.post(
    "https://clientes.sputnikclimbing.com/ScheduleV2/GetPeopleInTheGym",
    { "Namespace": "sputnik", "GymID": 121 },
    { "headers": { "Content-Type": "application/json" } }
  );

  return { code: response.status, data: response.data };
};

module.exports = getCapacity;