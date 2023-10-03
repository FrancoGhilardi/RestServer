import express from "express";
import cors from "cors";
import { router } from "../routes/user.js";
import { dbConnection } from "../database/config.db.js";
import { auth } from "../routes/auth.js";
import { categories } from "../routes/categories.js";

export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      auth: "/api/Auth",
      categories: "/api/categories",
      user: "/api/users",
    };

    //!CONNECT TO DB
    this.conectToDB();

    //!Middleware
    this.middleware();
    //!Rutas de mi app
    this.routes();
  }

  //#region CONNECT TO DB
  async conectToDB() {
    await dbConnection();
  }
  //#endregion

  //#region MIDDLEWARE
  middleware() {
    //Cors
    this.app.use(cors());

    //Parse and read body
    this.app.use(express.json());

    //Directory public
    this.app.use(express.static("public"));
  }
  //#endregion

  //#region RUTAS
  routes() {
    this.app.use(this.paths.auth, auth);
    this.app.use(this.paths.categories, categories);
    this.app.use(this.paths.user, router);
  }
  //#endregion

  //#region LISTEN
  listen() {
    this.app.listen(this.port, () => console.log(`Port: ${this.port}`));
  }
  //#endregion
}
