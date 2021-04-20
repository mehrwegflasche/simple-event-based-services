const createExpressApp = require('./app/express');
const createConfig = require('./config')
const env = require('./env')

const config = createConfig(env);
const app = createExpressApp(config, env);

function start() {
    app.listen(env.port, signalAppStart);
}




const signalAppStart = () => {
    console.log(`${env.appName} started`)

    console.table([["Port", env.port], ["Environment", env.env]])
}

module.exports = {
    start,
    config,
    app
}