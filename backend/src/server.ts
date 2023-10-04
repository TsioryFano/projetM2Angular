import express from "express";
import cors  from "cors"; 
import { SESAMIENS } from "./mock-sesamien-list";

const app = express();
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/sesamiens", (req, res)=>{
    res.send(SESAMIENS);
})

app.get("/api/sesamiens/byName/:sesmienName", (req, res)=>{
    const sesamienName = req.params.sesmienName;
    const sesamien = SESAMIENS.filter(sesamien => sesamien.name.toLowerCase()
    .includes(sesamienName.toLowerCase()));
    if (sesamien.length === 0) {
        // Gérer le cas où aucun résultat n'est trouvé
        res.status(404).json({ error: "Aucun sesamien trouvé" });
      } else {
        res.send(sesamien);
      }
});
    

app.get("/api/sesamiens/byId/:sesmienId", (req, res)=>{
    const sesamienId = req.params.sesmienId;
    const sesamien = SESAMIENS.find(sesamien => sesamien.id == sesamienId);
    if(!sesamien){
         // Gérer le cas où aucun résultat n'est trouvé
        res.status(404).json({ error: "Sesamien non trouvé" });
    } else {
        res.send(sesamien);
    }
    
});

// Middleware d'erreur générique
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: "Erreur interne du serveur" });
  });
  


const port = 5000;
app.listen(port, ()=>{
    console.log("Website served on http://localhost : "+port);
})
