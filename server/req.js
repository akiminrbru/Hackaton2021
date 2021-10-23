const mongoose = require('mongoose')
const config = require('config')
const Notice = require('./models/Notice')

async function Request() {
	await mongoose.connect(config.get("mongoUrl"), {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
	
	const notice = new Notice({
		timestamp: new Date().toLocaleString(),
		messenger: "TG",
		destination: "-1001574677068",
		message: "Пятый сбой в системе"
	})
	await notice.save()

	const notice2 = new Notice({
		timestamp: new Date().toLocaleString(),
		messenger: "VK",
		destination: "2000000002",
		message: "Шестой сбой в системе"
	})
	await notice2.save()

	const notice3 = new Notice({
		timestamp: new Date().toLocaleString(),
		messenger: "SL",
		destination: "C02KGN3M6RE",
		message: "Седьмой сбой в системе"
	})
	await notice3.save()
}

Request()