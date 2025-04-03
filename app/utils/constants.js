require('dotenv').config();

global.SQL_HOST=process.env.SQL_HOST;
global.SQL_USER=process.env.SQL_USER;
global.SQL_PASSWORD=process.env.SQL_PASSWORD;
global.SQL_DATABASE=process.env.SQL_DATABASE;
global.PORT=process.env.PORT;


global.LOGIN_TABLE='login';