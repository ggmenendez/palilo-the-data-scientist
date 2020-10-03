require('dotenv').config();
const db = require('./providers').db;
const cron = require('./cron');

const initialize = async () => {
  await db.connect();
  cron.initialize();
};

initialize().then(async () => {
  console.log('Server initialized');
});
