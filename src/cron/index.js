const cron = require('node-cron');
const schedules = require('./schedules');

const initialize = () => {
  console.log('Setting cron jobs...');
  schedules.forEach(([expression, executable]) => {
    cron.schedule(expression, executable, { timezone: "Europe/Madrid" });
  });
  console.log('...cron jobs set');
};

module.exports = {
  initialize,
};
