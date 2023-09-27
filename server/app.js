const express = require("express");
const app = express();
const port = 3000; // Port sur lequel le serveur écoutera

// Middleware pour gérer les données JSON
app.use(express.json());

// Exemple de route
app.get("/", (req, res) => {
  res.send("Bienvenue sur votre serveur Express !");
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
