import Dotenv from 'dotenv';
let config;

if(process.env.NODE_ENV === 'prod') {
    config = {
        "username": process.env.MYSQL_USERNAME,
        "password": process.env.MYSQL_PASSWORD,
        "host": process.env.MYSQL_HOSTNAME,
        "port": Number(process.env.MYSQL_PORT),
        "database": "dvt_blog"
    }
} else {
    Dotenv.config({path: './.env'});

    config = {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASS,
        "host": process.env.DB_HOST,
        "port": process.env.DB_PORT,
        "database": "dvt_blog"
    }
}

console.log(config)


export default config
