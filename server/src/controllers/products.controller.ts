import { Router } from "express";
import { MySQLRepository } from "../repositories/mysql.repository";
import { ProductService } from "../services/products.services";

const router: Router = Router();
const service = new ProductService(new MySQLRepository());
// Rutas corresponden a las acciones de un CRUD Tipico
router.get("/", service.index);
router.get("/:id", service.show);

router.get("/edit", service.create);
router.post("/edit/:id", service.store);

router.delete("/destroy/:id", service.destroy);

router.get("/edit/:id", service.edit);
router.put("/edit/:id", service.update);

export default router;
