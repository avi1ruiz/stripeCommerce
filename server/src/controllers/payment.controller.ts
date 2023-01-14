import { Router } from "express";
import { PaymentService } from "../services/payment.services";

const router: Router = Router();

const paymentService = new PaymentService();

router.post("/api/payment/create", paymentService.create);
router.post("/api/payment/confirm", paymentService.confirm);

export default router;
