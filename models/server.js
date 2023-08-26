import express from "express";
import cors from "cors";
import { router } from "../routes/user.js";

export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.userPath = "/api/users";

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
    this.app.use(this.userPath, router);
  }
  //#endregion

  //#region LISTEN
  listen() {
    this.app.listen(this.port, () => console.log(`Puerto: ${this.port}`));
  }
  //#endregion
}
