const express = require("express");
const app = express(); 
const PUERTO = 8080; 
const exphbs = require("express-handlebars");
const socket = require("socket.io");
const viewsRouter = require("./routes/views.router");

//Middleware para archivos estáticos
app.use(express.static("./src/public"));

//Configuramos handlebars
app.engine("handlebars", exphbs.engine()); 
app.set("view engine", "handlebars");
app.set("views", "./src/views");


//Routing
app.use("/", viewsRouter); 

const httpServer = app.listen(PUERTO);