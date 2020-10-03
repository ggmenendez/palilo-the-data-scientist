const mongoose = require('mongoose');
const capacity = require('./capacity');

module.exports = {
  ModelCapacity: capacity(mongoose),
};
