// Import Winston and configure the logger
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'app.log' })
  ]
});

// Log some messages
logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');
