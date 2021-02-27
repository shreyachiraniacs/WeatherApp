const express = require("express");
const app = express();
const hbs= require("hbs");
const port= process.env.PORT || 3000;
const path = require("path");
const staticpath= path.join(__dirname,"../public");
//const template_path= path.join(__dirname,"../templates/views");
//const Partials_path= path.join(__dirname,"../templates/partials");
app.set("views", path.join(__dirname,'../views'))
app.set('view engine', 'hbs');
//app.set('views', 'template_path');
//hbs.registetPartials(partials_path);

app.use(express.static(staticpath));

app.get("", (req,res)=>{
    res.render("index");
});

app.get("/weather", (req,res)=>{

    res.render("weather");
});

app.get("*", (req,res)=>{
    res.render("404error", {errormsg: 'OOPS! page not found'});
});
app.listen(port, ()=>{
    console.log(`listening to port at ${port}`);
});
