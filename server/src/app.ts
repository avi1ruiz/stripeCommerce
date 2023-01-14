import express, { Application, Request, Response } from "express";
import { create } from "express-handlebars";
import morgan from "morgan";
import enviroments from "./enviroment";
import routerProduct from "./controllers/products.controller";
import routerPayment from "./controllers/payment.controller"
import { join } from "path";

// Inicializar express
const app: Application = express();

// Definir configuraciones
app.set("port", enviroments.SERVER.PORT);
app.set("views", join(__dirname, "views"));

// Definir middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.engine(
  ".hbs",
  create({
    defaultLayout: "main",
    layoutsDir: join(app.get("views"), "layouts"),
    partialsDir: join(app.get("views"), "partias"),
    extname: ".hbs",
  }).engine
);
app.set("view engine", ".hbs");

// Definen las rutas
app.use(routerProduct);
app.use(routerPayment);

app.use(function (req: Request, res: Response) {
  res.status(404).render("404.hbs")
})

// Exporta la aplicacion
export default app;
