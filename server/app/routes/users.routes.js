const userController = require('../controllers/user.controller.js');
const { checkJwt, verifySubInQuery, verifySubInBody } = require('../middlewares/auth.middlewares.js');
const { validateUserInfo, validateUserSub } = require('../validators/validators.js');

module.exports = (app) => {
    // Create a new user.
    app.post('/users',
        checkJwt,
        validateUserInfo,
        (req, res, next) => verifySubInBody(req, res, next),
        async (req, res) => {
            try { await userController.createUser(req, res); } 
            catch (e) {
                console.log(e);
                 throw e }
        }
    );

    // Retrieve user data.
    app.get('/users',
        checkJwt,
        validateUserSub,
        (req, res, next) => verifySubInQuery(req, res, next),
        async (req, res) => {
            try { await userController.getUser(req, res); } 
            catch (e) { throw e; }
        }
    );

    // Retrieve links created by a user.
    app.get('/users/links',
        checkJwt,
        validateUserSub,
        (req, res, next) => verifySubInQuery(req, res, next),
        async (req, res) => {
            try { await userController.getUserLinks(req, res); } 
            catch (e) { res.status(500).json({ error: e.message }); }
        }
    );

    // Update existing user.
    app.put('/users',
        checkJwt,
        validateUserInfo,
        (req, res, next) => verifySubInBody(req, res, next),
        async (req, res) => {
            try { await userController.updateUser(req, res); } 
            catch (e) { throw e; }
        }
    );
};
