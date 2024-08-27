export const modelTemplate = `const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
  // Define your schema here
});

module.exports = mongoose.model('ModelName', ModelSchema);`;
