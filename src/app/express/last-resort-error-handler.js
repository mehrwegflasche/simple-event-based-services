const lastResortErrorHandler = (err, req, res, next) => {
    const traceID = req.context ? req.context.traceID : 'none';
    console.error(traceID, err);
    res.status(500).send(err);
}

module.exports = lastResortErrorHandler;