 const express = require('express');
 /* require all the routes here */
 const authRoutes = require("./routes/auth.route");
 const cookieParser = require("cookie-parser");
 const cors = require("cors")




 const app = express();

 app.use(express.json());
 app.use(cookieParser());
 app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
 }))
 /*using all the routes here*/
 app.use("/api/auth",authRoutes);


 module.exports = app;