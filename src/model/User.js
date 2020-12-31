const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    hotelname:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    menu:{
        type: String,
        required: true
    },
    createdate:{
        type: Date,
        default: Date.now()
    }
});

module.exports = User = mongoose.model('user',userSchema);
