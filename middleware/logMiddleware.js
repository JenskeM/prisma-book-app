import logger from '../utils/log.js'

function log(req, res, next) {
    const start = new Date()

    next()

    const ms = new Date() - start

    logger.info(
        `\n${req.method} ${req.originalUrl}.Status: ${res.statusCode}.Duration: ${ms} ms`,
    )
}


export default log