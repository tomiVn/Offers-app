
exports.errorHanler = (err, req, res, next) => {

const status = err.status || 401
const errorMessage = err.message || 'Something went wrong!'

res.status(status).json({message: errorMessage});
};
