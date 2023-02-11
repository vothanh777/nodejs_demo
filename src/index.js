import express, { Router } from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

//HTTP logger
app.use(morgan("combined"));

// // Template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", "./src/resources/views");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
