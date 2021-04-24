const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
    dataId:{
        type: Number,
        required: true
    },
  data: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('Data', dataSchema);