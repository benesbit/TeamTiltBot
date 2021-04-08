const tmi = require('tmi.js');
import { config } from './config.mjs';

// Define configuration options
const opts = {
    identity : {
        username: config.BOT_USERNAME,
        password: config.OAUTH_TOKEN
    },
    channels : [
        config.CHANNEL_NAME
    ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers
client.on('message', onMessageHandler);
client.on('connected', onConnectionHandler);

// Connect to Twitch
client.connect();

// Called every time a message comes in (Message Handler)
function onMessageHandler(target, context, msg, self) {
    if (self) { return; } // Ignore your own messages you silly bot

    // Remove whitespace from chat message
    const commandName = msg.trim();

    // If the command is known, execute it baby!
    switch (commandName) {
        case '!dice':
            const num = rollDice();
            client.say(target, `You rolled a ${num}`);
            console.log(`* Executed ${commandName} command`);
            break;
        default:
            // Command Unknown
            client.say(target, `Sorry, but ${commandName} is an unknown command`);
            console.log(`* Unknown command ${commandName}`);
    }
}

// Function called when "!dice" command is issued
function rollDice() {
    const sides = 6;
    return Math.floor(Math.random() * sides) + 1;
}

// Called every time the bot connects to Twitch chat
function onConnectionHandler(addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}