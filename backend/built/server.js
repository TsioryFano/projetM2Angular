"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var mock_sesamien_list_1 = require("./mock-sesamien-list");
var app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
    origin: ["http://localhost:4200"]
}));
app.get("/api/sesamiens", function (req, res) {
    res.send(mock_sesamien_list_1.SESAMIENS);
});
app.get("/api/sesamiens/byName/:sesmienName", function (req, res) {
    var sesamienName = req.params.sesmienName;
    var sesamien = mock_sesamien_list_1.SESAMIENS.filter(function (sesamien) { return sesamien.name.toLowerCase()
        .includes(sesamienName.toLowerCase()); });
    if (sesamien.length === 0) {
        // Gérer le cas où aucun résultat n'est trouvé
        res.status(404).json({ error: "Aucun sesamien trouvé" });
    }
    else {
        res.send(sesamien);
    }
});
app.get("/api/sesamiens/byId/:sesmienId", function (req, res) {
    var sesamienId = req.params.sesmienId;
    var sesamien = mock_sesamien_list_1.SESAMIENS.find(function (sesamien) { return sesamien.id == sesamienId; });
    if (!sesamien) {
        // Gérer le cas où aucun résultat n'est trouvé
        res.status(404).json({ error: "Sesamien non trouvé" });
    }
    else {
        res.send(sesamien);
    }
});
// Middleware d'erreur générique
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ error: "Erreur interne du serveur" });
});
var port = 5000;
app.listen(port, function () {
    console.log("Website served on http://localhost : " + port);
});
