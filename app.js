import express from 'express';

import * as loaderExpress from './loaders/express.js';

if(process.env.NODE_ENV === 'prod') {
    console.log('[ + ] Production mode');
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
