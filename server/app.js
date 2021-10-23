const mongoose = require('mongoose')
const config = require('config')
const Notice = require('./models/Notice')
const {botVk, bot, botSlack} = require('./bots/botConnect')

async function start() {
	await mongoose.connect(config.mongoUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
	
	const data = await Notice.find() //{"timestamp": { $gt: new Date(Date.now() - 60*60 * 1000) }}

	if (data.length == 0) {
		return console.log("Данные не обнаружены")
	}

	for (let i = 0; i < data.length; i++) { 
		sendMsg(data[i])
	}
}

async function sendMsg(data) {

	const {id, timestamp, messenger, destination, message} = data

	switch(messenger) {
		case 'TG': 
			try {
				bot.sendMessage(parseInt(destination), timestamp + "\n" + message)
				await Notice.deleteOne({_id: id})
			} catch (e) {
				console.log(e)
			}
			break;
		case 'VK': 
			try {
				botVk.sendMessage(parseInt(destination), timestamp + "\n" + message)
				await Notice.deleteOne({_id: id})
			} catch (e) {
				console.log(e)
			}
			break;
		case 'SL': 
			try {
				botSlack.postMessage(destination, timestamp + "\n" + message)
				await Notice.deleteOne({_id: id})
			} catch (e) {
				console.log(e)
			}
			break;
		default:
			console.log("Произошла ошибка")
	}
}

start()
setInterval(() => start(), 10000);