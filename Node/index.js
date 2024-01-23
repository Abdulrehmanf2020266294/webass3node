const PORT=8000;

const express=require("express");
const app=express();
const path=require("path");

// app.set("view engine","ejs");

// app.use(express.static(path.join(__dirname, "public")));
// app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

//setting ejs
app.set("view engine", "ejs");
// app.set("views","views/partial")
app.set("views", path.join(__dirname, "views/partial"));
app.use(express.static(path.join(__dirname, "public/css")));

app.get("/", (req, res) => {

    res.render("Home");
});

app.get("/home", (req, res) => {

    res.render("home");
});

app.get("/navbar", (req, res) => {

    res.render("NavbaR");
});

app.get("/about", (req, res) => {

    res.render("about");
});

app.get("/portfolio", (req, res) => {

    res.render("portfolio");
});

app.get("/resume", (req, res) => {

    res.render("resume");
});

app.get("/skills", (req, res) => {

    res.render("skills");
});

app.get("/contact", (req, res) => {

    res.render("contact");
});

app.get("/footer", (req, res) => {

    res.render("footer");
});
app.listen(PORT, () => {

    console.log(`Server listening at port ${PORT}`);

});