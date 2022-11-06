const jwt = require('jsonwebtoken');

exports.auth = (async (req, res, next) => {

    const token = req.headers['x-authorization'];
    
    if (token) {

        jwt.verify(token, process.env.SECRET_KEY, function (error, result) {

            if (error) {

                return res.status(401).json( { message: 'Invalid token!' } );
            }

            req.user = result;           
            res.locals.user = result;
            return next();
        });
        
    } else {
        next();
    }
});
