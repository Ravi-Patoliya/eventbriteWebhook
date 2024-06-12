const { response, logger } = require('../helpers');
const { MESSAGE } = require('../helpers/constant.helper');

module.exports = async (error, _req, res, _next) => {
    response.INTERNAL_SERVER_ERROR({
        res,
        message: MESSAGE.INTERNAL_SERVER_ERROR,
        payload: { context: error.message },
    });
    return logger.error(error);
};
