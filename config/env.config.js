const Joi = require('joi');
require('dotenv').config();

const { logger } = require('../helpers');

const envSchema = Joi.object({
    PROJECT_NAME: Joi.string().trim().default('T01'),
    API_BASE_URL: Joi.string().trim().default('/api'),
    VIEWS_BASE_URL: Joi.string().trim().default(''),
    PORT: Joi.number().default(3000),
});

const { value: vars, error } = envSchema.validate(process.env, {
    allowUnknown: false,
    stripUnknown: true,
    abortEarly: false,
});

if (error) {
    logger.error('✘ ENV VARIABLE(S) MISSING');
    throw new Error(error); //* this will stop the server if any env variable is missing
} else logger.info(`✔ ENV VARIABLES LOADED`);

module.exports = vars;
