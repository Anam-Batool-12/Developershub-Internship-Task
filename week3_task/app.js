const logger = require('winston');

const log = logger.createLogger({
  level: 'info',
  format: logger.format.combine(
    logger.format.timestamp(),
    logger.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    new logger.transports.Console(),
    new logger.transports.File({ filename: 'security.log' })
  ]
});

log.info('Application started');
log.warn('Suspicious activity detected');
log.error('Failed login attempt');
