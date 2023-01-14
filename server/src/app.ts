import express, { Application } from "express";
import morgan from "morgan";
import enviroments from "./enviroment";
import routerProduct from "./controllers/products.controller";

// Inicializar express
const app: Application = express();

// Definir configuraciones
app.set("port", enviroments.SERVER.PORT);

// Definir middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Definen las rutas
app.use("/api/products", routerProduct);

// Exporta la aplicacion
export default app;
