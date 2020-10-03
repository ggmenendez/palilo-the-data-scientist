module.exports = (mongoose) => {
  const capacitySchema = new mongoose.Schema({
    people: Number,
    capacity: Number,
    createdAt: Date,
    updatedAt: Date,
  }, { timestamps: true });

  capacitySchema.virtual('percentage').get(() => Math.floor((this.people/this.capacity)*100));

  return capacitySchema;
};
