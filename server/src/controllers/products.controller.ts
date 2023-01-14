import { Router } from "express";
import { MySQLRepository } from "../repositories/mysql.repository";
import { ProductService } from "../services/products.services";

const router: Router = Router();
const porductService = new ProductService(new MySQLRepository());
// Rutas corresponden a las acciones de un CRUD Tipico
router.get("/", porductService.index);
router.get("/:id", porductService.show);

router.get("/edit", porductService.create);
router.post("/edit/:id", porductService.store);

router.delete("/destroy/:id", porductService.destroy);

router.get("/edit/:id", porductService.edit);
router.put("/edit/:id", porductService.update);

export default router;
