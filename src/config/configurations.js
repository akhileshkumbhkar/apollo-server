const envVars = require('dotenv').config();

const config = envVars.parsed;

export default config;
Object.freeze(config);
