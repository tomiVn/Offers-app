exports.cors = () => ((req, res, next) => {

res.setHeader('Access-Control-Allow-Origin', '*');
//res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000, http://localhost:4200'); //*-> http://localhost:3000
//res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');

res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Authorization');

next();
});