import express from 'express';

import * as loaderExpress from './loaders/express.js';

if(process.env.NODE_ENV === 'prod') {
    console.log('[ + ] Production mode', 
    process.env.MYSQL_USERNAME,
    process.env.MYSQL_PASSWORD,
    process.env.MYSQL_HOSTNAME,
    process.env.MYSQL_PORT);
} else {
    console.log('[ + ] Development mode');
}

async function startExpressServer() {
    const app = express();
    await loaderExpress.init(app);

    app.listen(9000, err => {
        console.log(`[ + ] The server is running.`);
    });
}
  
startExpressServer();
