const Joi = require('joi');

// Signup Validation
const signupvalidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(100).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            message: "Bad request",
            error: error.details[0].message,
        });
    }
    next();
};

// Login Validation
const loginvalidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(100).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            message: "Bad request",
            error: error.details[0].message,
        });
    }
    next();
};

module.exports = { signupvalidation, loginvalidation };