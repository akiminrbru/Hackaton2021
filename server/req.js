const mongoose = require('mongoose')
const config = require('config')
const Notice = require('./models/Notice')

async function Request() {
	await mongoose.connect(config.get("mongoUrl"), {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
	
	// const notice = new Notice({
	// 	timestamp: new Date().toLocaleString(),
	// 	messenger: "TG",
	// 	destination: "-1001574677068",
	// 	message: "Сообщение для телеграмма"
	// })
	// await notice.save()

	// const notice2 = new Notice({
	// 	timestamp: new Date().toLocaleString(),
	// 	messenger: "VK",
	// 	destination: "2000000002",
	// 	message: "Сообщение для вконтакте"
	// })
	// await notice2.save()

	const notice3 = new Notice({
		timestamp: new Date().toLocaleString(),
		messenger: "SL",
		destination: "C02KGN3M6RE",
		message: "Сообщение для слака"
	})
	await notice3.save()
}

Request()
setInterval(() => Request(), 100000)