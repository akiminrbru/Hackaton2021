const {Schema, model} = require('mongoose')

const Notice = new Schema({
    timestamp: {type: String, required: true},
	messenger: {type: String, required: true},
	destination: {type: String, required: true},
	message: {type: String, required: true},
});

module.exports = model("Notice", Notice);