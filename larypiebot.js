const Discord = require("discord.js")
const client = new Discord.Client()

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
	switch (msg.content.toLowerCase()) {
		case 'l!todo':
			
			break;
		default:
			console.log('did not detect message')
			break;
	}
	if (msg.content === 'ping') {
		msg.reply('Pong!')
	}

	var message = msg.content.toLowerCase()
	console.log(message)
	if(message.includes('l!addtodo ')){
		message = message.replace('l!addtodo ','')
		console.log(message)
		msg.reply(message)
	}
})

client.login('MTg5OTI3NDMxNDMwMzQwNjA4.DFSUDw.V9cceJnk9HCpAr4V6uSIdqB_w-4');