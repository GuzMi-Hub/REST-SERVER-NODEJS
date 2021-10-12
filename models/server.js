const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../db/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {
      auth: "/api/auth",
      categorias: "/api/categorias",
      productos: "/api/productos",
      usuarios: "/api/usuarios",
    };

    //Conectar a base de datos
    this.conectarDB();

    this.middlewares();
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    //cors
    this.app.use(cors());

    //Lectura y parseo (Que entienda json pues)

    this.app.use(express.json());

    //Directorio Público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.paths.usuarios, require("../routes/usuarios"));
    this.app.use(this.paths.auth, require("../routes/auth"));
    this.app.use(this.paths.productos, require("../routes/productos"));
    this.app.use(this.paths.categorias, require("../routes/categorias"));
  }

  listen() {
    this.app.listen(this.port);
  }
}

module.exports = Server;
