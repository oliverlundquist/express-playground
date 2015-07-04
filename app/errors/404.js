module.exports = function(err, req, res, next) {
    if (err.status === 404) {
        res.json({ error: 'Not Found! (404)' });
    } else {
        next(err);
    }
}
