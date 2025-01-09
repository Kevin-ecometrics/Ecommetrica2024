const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const path = require("path");
const indexPath = path.join(__dirname, "..", "index.html");
const nodeMailer = require("nodemailer");
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "..")));

const db = mysql.createConnection({
  host: "localhost",
  user: "srgenial_admin",
  password: "wb_VEK(]]tD$",
  database: "srgenial_ecommetrica",
});

db.connect((error) => {
  if (error) {
    console.error("Error al conectar a la base de datos:", error);
    process.exit(1); // Termina la aplicación si no se puede conectar a la base de datos
  }
  console.log("Conexión a la base de datos exitosa");
});

let transporter = nodeMailer.createTransport({
  host: "e-commetrics.com",
  port: 465,
  secure: true,
  auth: {
    user: "admin@e-commetrics.com",
    pass: "Wain@Cushy26",
  },
});

app.post("/api/saveData", (req, res) => {
  const { email, phone, businessType } = req.body;

  if (!email || !phone || !businessType) {
    return res
      .status(400)
      .send({ message: "Todos los campos son obligatorios" });
  }

  // Inserta los datos en la base de datos
  const query =
    "INSERT INTO business_contacts (email, phone, businessType) VALUES (?, ?, ?)";
  db.query(query, [email, phone, businessType], (err, result) => {
    if (err) {
      console.error("Error saving data to the database:", err);
      return res.status(500).send({ message: "Error al guardar los datos" });
    }
    res.status(200).send({ message: "Datos guardados correctamente" });
  });
});

app.post("/asesorias", (req, res) => {
  const { time, code, type, email } = req.body;
  const query =
    "INSERT INTO asesorias (time, code, type, email) VALUES (?, ?, ?, ?)";
  db.query(query, [time, code, type, email], (err, result) => {
    if (err) {
      console.error("Error saving data to the database:", err);
      return res
        .status(500)
        .send({ message: "Error al confirmar la asesoría" });
    }
    console.log("Asesoría guardada:", result);

    // Configuración del correo electrónico
    const mailOptions = {
      from: '"E-commetrics" <admin@e-commetrics.com>', // remitente
      to: email, // destinatario
      cc: "admin@e-commetrics.com", // copia del correo
      subject: "Confirmación de Asesoría", // asunto
      text: `Hola,\n\nGracias por solicitar una asesoría. Nos pondremos en contacto contigo pronto.\n\nSaludos,\nE-commetrics`, // cuerpo del correo en texto plano
      html: `<p>Hola,</p><p>Gracias por solicitar una asesoría. Nos pondremos en contacto contigo pronto.</p><p>Saludos,<br>E-commetrics</p>`, // cuerpo del correo en HTML
    };

    // Envía el correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res
          .status(500)
          .send({ message: "Error al enviar el correo electrónico" });
      }
      console.log("Email sent:", info.response);
      res
        .status(200)
        .send({ message: "Asesoría confirmada exitosamente y correo enviado" });
    });
  });
});

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

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .send({ message: "Todos los campos son obligatorios" });
  }

  // Inserta los datos en la base de datos
  const query = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error("Error saving data to the database:", err);
      return res.status(500).send({ message: "Error al guardar el contacto" });
    }

    // Configuración del correo electrónico
    const mailOptions = {
      from: '"E-commetrics" <admin@e-commetrics.com>', // remitente
      to: email, // destinatario
      cc: "admin@e-commetrics.com", // copia del correo
      subject: "Confirmación de Contacto", // asunto
      text: `Hola ${name},\n\nGracias por contactarnos. Hemos recibido tu mensaje:\n\n"${message}"\n\nNos pondremos en contacto contigo pronto.\n\nSaludos,\nE-commetrics`, // cuerpo del correo en texto plano
      html: `<p>Hola ${name},</p><p>Gracias por contactarnos. Hemos recibido tu mensaje:</p><p>"${message}"</p><p>Nos pondremos en contacto contigo pronto.</p><p>Saludos,<br>E-commetrics</p>`, // cuerpo del correo en HTML
    };

    // Envía el correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res
          .status(500)
          .send({ message: "Error al enviar el correo electrónico" });
      }
      console.log("Email sent:", info.response);
      res
        .status(200)
        .send({ message: "Contacto guardado y correo enviado correctamente" });
    });
  });
});

app.get("*", (req, res) => {
  res.sendFile(indexPath);
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
