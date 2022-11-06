exports.parseErrors = (error) => {
    
    if (error.errors) {
        return Object.values(error.errors).map(e => e.message);
    } else if (error.code === 11000 && error.name == 'MongoServerError') {
        return Object.keys(error.keyValue).map(e => `This ${e} is taken!`);
    } else {
        return error.message.split('\n');
    }
}