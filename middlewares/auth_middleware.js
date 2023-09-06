module.exports.authMiddleware = (request, response, next) => {
    const isLoggedIn = true
    if (isLoggedIn) {
        next();
    } else {
        response.status(401).send("Unauthorized: User needs to be logged in");
    }
};
