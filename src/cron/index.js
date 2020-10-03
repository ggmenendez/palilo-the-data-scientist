const cron = require('node-cron');
const schedules = require('./schedules');

const initialize = () => {
  console.log('Setting cron jobs...');
  schedules.forEach(([expression, executable]) => {
    const wrapper = async () => {
      await executable();
    };
    cron.schedule(expression, wrapper, { timezone: "Europe/Madrid" });
  });
  console.log('...cron jobs set');
};

module.exports = {
  initialize,
};
