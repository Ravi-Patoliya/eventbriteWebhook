module.exports = {
    ENUM: {
        HTTP_CODES: {
            BAD_REQUEST: 400,
            DUPLICATE_VALUE: 409,
            FORBIDDEN: 403,
            INTERNAL_SERVER_ERROR: 500,
            METHOD_NOT_ALLOWED: 405,
            MOVED_PERMANENTLY: 301,
            NOT_ACCEPTABLE: 406,
            NOT_FOUND: 404,
            NO_CONTENT_FOUND: 204,
            OK: 200,
            PERMANENT_REDIRECT: 308,
            UNAUTHORIZED: 401,
            UPGRADE_REQUIRED: 426,
            VALIDATION_ERROR: 422,
        },
    },
    MESSAGE: {
        INTERNAL_SERVER_ERROR: 'Internal server error.',
        SUCCESS: 'Success.',
        NOT_FOUND: 'Not found.',
    },
    REGEXP: {
        DOMAIN: /^((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,1}\.(xn--)?([a-z0-9\-]{1,61}|[a-z0-9-]{1,30}\.[a-z]{2,})$/,
        EMAIL: /(?!^[.+&'_-]*@.*$)(^[_\w\d+&'-]+(\.[_\w\d+&'-]*)*@[\w\d-]+(\.[\w\d-]+)*\.(([\d]{1,3})|([\w]{2,}))$)/,
    },
};
