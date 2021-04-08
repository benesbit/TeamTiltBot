const tmi = require('tmi.js');
import { config } from './config';

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
