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
