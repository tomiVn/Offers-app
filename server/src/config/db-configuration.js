const db = require('mongoose');

exports.dbConnect = () => {
db.connection.on('open', () => console.log('DB connected'));
return db.connect(process.env.CONNECTION_STRING_DB);
}