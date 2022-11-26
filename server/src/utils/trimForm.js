exports.trimForm = (req, res, next) => {
    for(key in req.body){
        req.body[key] = req.body[key].trim();
    }
    next()
}