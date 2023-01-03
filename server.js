const  express =  require("express");
const db = require('./database/db.js');

const app = express();

const port = process.env.PORT||4000;


app.listen(port,console.log("the sever is working on port : " , port));