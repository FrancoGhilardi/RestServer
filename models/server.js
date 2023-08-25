import express from "express";

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
    this.app.use(express.static("public"));
  }
  //#endregion

  //#region RUTAS
  routes() {
    this.app.get("/", (req, res) => {
      res.send("Welcome");
    });
  }
  //#endregion

  //#region LISTEN
  listen() {
    this.app.listen(this.port, () => console.log(`Puerto: ${this.port}`));
  }
  //#endregion
}
