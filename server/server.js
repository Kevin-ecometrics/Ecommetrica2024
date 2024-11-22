const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();

app.use(cors());
app.use(express.json());

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ecommetrica",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
});

app.post("/api/saveData", (req, res) => {
  const { email, phone, businessType } = req.body;
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Business Type:", businessType);
  res.status(200).send("Email sent successfully");
});

// Nueva ruta para manejar la solicitud de asesorías
app.post("/asesorias", (req, res) => {
  const { time, code, type } = req.body;
  const query = "INSERT INTO asesorias (time, code, type) VALUES ( ?, ?, ?)";
  db.query(query, [time, code, type], (err, result) => {
    if (err) {
      console.error("Error saving data to the database:", err);
      return res
        .status(500)
        .send({ message: "Error al confirmar la asesoría" });
    }
    console.log("Asesoría guardada:", result);
    res.status(200).send({ message: "Asesoría confirmada exitosamente" });
  });
});

// Nueva ruta para obtener las asesorías
app.get("/asesorias", (req, res) => {
  const query = "SELECT * FROM asesorias";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data from the database:", err);
      return res
        .status(500)
        .send({ message: "Error al obtener las asesorías" });
    }
    res.status(200).send(results);
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
