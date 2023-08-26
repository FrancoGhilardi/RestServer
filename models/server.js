import express from "express";
import cors from "cors";

export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //!Middleware
    this.middleware();
    //!Rutas de mi app
    this.routes();
  }

  //#region MIDDLEWARE
  middleware() {
    //? Cors
    this.app.use(cors());

    //?Directory public
    this.app.use(express.static("public"));
  }
  //#endregion

  //#region RUTAS
  routes() {
    this.app.get("/api", (req, res) => {
      res.json({ Message: "GET" });
    });

    this.app.put("/api", (req, res) => {
      res.status(400).json({ Message: "PUT" });
    });

    this.app.post("/api", (req, res) => {
      res.status(201).json({ Message: "POST" });
    });

    this.app.delete("/api", (req, res) => {
      res.json({ Message: "DELETE" });
    });
  }
  //#endregion

  //#region LISTEN
  listen() {
    this.app.listen(this.port, () => console.log(`Puerto: ${this.port}`));
  }
  //#endregion
}
