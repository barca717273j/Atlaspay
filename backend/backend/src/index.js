const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = 3333;
app.listen(PORT, () => {
  console.log("🚀 AtlasPay backend rodando na porta " + PORT);
});
