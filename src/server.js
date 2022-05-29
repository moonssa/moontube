import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();

const logger = morgan("dev");
const handleHome = (req, res) => {
  return res.send("Home Page");
};

const handleLogin = (req, res) => {
  return res.send("Login page");
};

app.use(logger);
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`ServerListening on port http://localhost::${PORT}`);

app.listen(4000, handleListening);
