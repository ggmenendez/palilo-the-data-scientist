const schema = require('./schema');

const MODEL_NAME = 'capacity';

module.exports = (mongoose) => {
  const capacitySchema = schema(mongoose);
  return mongoose.model(MODEL_NAME, capacitySchema);
};
