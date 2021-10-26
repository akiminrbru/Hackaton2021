const TelegramBot = require('node-telegram-bot-api')
const VkBot = require('node-vk-bot-api')
const SlackBot = require('slackbots')
const config = require('config')

const botVk = new VkBot(config.vktoken)
botVk.startPolling()

const bot = new TelegramBot(config.telegramtoken, {
    polling: true
})

const botSlack = new SlackBot({
	token: config.slacktoken,
	name: config.slackname
})

module.exports = {
	botVk,
	bot,
	botSlack
}