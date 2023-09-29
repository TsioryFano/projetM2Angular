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
    res.send(sesamien);
})

app.get("/api/sesamiens/byId/:sesmienId", (req, res)=>{
    const sesamienId = req.params.sesmienId;
    const sesamien = SESAMIENS.find(sesamien => sesamien.id == sesamienId);
    res.send(sesamien);
})


const port = 5000;
app.listen(port, ()=>{
    console.log("Website served on http://localhost : "+port);
})
