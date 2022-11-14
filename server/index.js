const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config({ path: 'src/config/.env' });
const { dbConnect } = require('./src/config/db-configuration');
const { cors } = require('./src/config/cors');
const routes = require('./src/routes/routes');
const { auth } = require('./src/middlewear/auth');
const { CLIENT_PATH } = require('./src/config/constants');

const app = express();
const PORT = process.env.PORT;

 app.use( express.static('../' + CLIENT_PATH ) )
    .use( bodyParser.urlencoded( { extended: true } ) )
    .use( express.json() )
    .use( cors() )
    .use( auth )
    .use( routes );

dbConnect()
    .then(() => {
        app.listen( PORT, () => console.log(`Server is running on port ${ PORT }...`) )
    })
    .catch(( err ) => console.log( `DB connection Error ${ err }` ));
//CONNECTION_STRING_DB=mongodb+srv://tomivn:dphe4HGweP9zJs1Z@atlascluster.e9oawjr.mongodb.net/auth