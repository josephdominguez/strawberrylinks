const { validationResult, query, body } = require('express-validator');

// Common validation middleware
const validate = (validations) => [
    ...validations,
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: errors.array()[0].msg });
        }
        next();
    },
];

const validateUserSub = validate([
    query('sub').notEmpty().withMessage('Sub cannot be empty.'),
]);

const validateUserInfo = validate([
    body('sub').notEmpty().withMessage('Sub cannot be empty.'),
    body('email').isEmail().withMessage('Invalid email format.'),
]);

module.exports = {
    validateUserSub,
    validateUserInfo,
};
