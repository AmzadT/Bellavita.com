// error handler middleware

const errorHandler = (err, req, res, next) => {
    if (err.name === 'ValidationError') {
        const errors = Object.values(err.errors).map(error => error.message);
        return res.status(400).json({ message: 'Validation failed', errors });
    }

    return res.status(500).json({ message: 'Server error', error: err.message });
};

module.exports = errorHandler;