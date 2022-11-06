
exports.userOnly = (req, res, next) => {

    if (!req.user) {

       return res.status(401).json({ message: 'Please log in!' });
    }

    next();
}

exports.guestOnly = (req, res, next) => {

    if (req.user) {

    return  res.status(400).json({ message: 'You are already logged in' });
    }

    next();
}