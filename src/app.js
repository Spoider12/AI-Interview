 const express = require('express');
 /* require all the routes here */
 const authRoutes = require("./routes/auth.route");
 const cookieParser = require("cookie-parser");




 const app = express();

 app.use(express.json());
 app.use(cookieParser());
 /*using all the routes here*/
 app.use("/api/auth",authRoutes);


 module.exports = app;