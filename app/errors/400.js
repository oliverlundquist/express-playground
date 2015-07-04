module.exports = function(err, req, res, next) {
    if (err.status === 400) {
        res.json({ error: 'Bad Request! (400)' });
    } else {
        next(err);
    }
}
