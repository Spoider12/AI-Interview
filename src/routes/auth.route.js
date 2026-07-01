const {Router} = require ("express");
const authController = require("../controller/auth.controller");
const authRoutes = Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authRoutes.post("/register", authController.registerUserController);
 

module.exports = authRoutes;