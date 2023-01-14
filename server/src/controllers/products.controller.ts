import { Router } from "express";
import { MySQLRepository } from "../repositories/mysql.repository";
import { ProductService } from "../services/products.services";

const router: Router = Router();
const service = new ProductService(new MySQLRepository());
// Rutas corresponden a las acciones de un CRUD Tipico
router.get("", service.index);
router.get("/:id", service.show);

router.get("", service.edit);
router.post("", service.create);

router.delete("/:id", service.destroy);

router.get("/:id", service.edit);
router.put("/:id", service.update);

export default router;
