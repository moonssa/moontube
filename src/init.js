import "./db";
import "./models/Video";
import app from "./server";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ ServerListening on port http://localhost::${PORT}`);

app.listen(4000, handleListening);