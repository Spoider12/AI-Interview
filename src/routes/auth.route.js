const {Router} = require ("express");
const authController = require("../controller/auth.controller");
const authRoutes = Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authRoutes.post("/register", authController.registerUserController);
 /**
  * @route POST /api/auth/login
  * @desc Login an existing user
  * @access Public
  */
authRoutes.post("/login", authController.loginUserController);
/**
 * @route GET /api/auth/logout
 * @desc Logout a user
 * @access Public
 */
authRoutes.get("/logout", authController.logoutUserController);
  

module.exports = authRoutes;