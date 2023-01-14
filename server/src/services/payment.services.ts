import { NextFunction, Request, Response } from "express";
import stripe from "../libs/stripe";

export class PaymentService {
  create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { amount } = req.body;

      const { client_secret } = await stripe.paymentIntents.create({
        amount: amount,
        currency: "mxn",
        payment_method_types: ["card"],
      });

      res.json({ client_secret });
    } catch (error) {
      next(error);
    }
  };

  confirm = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { client_secret, payment_method } = req.body;

      const paymentConfirm = await stripe.paymentIntents.confirm(
        client_secret,
        {
          payment_method: payment_method,
        }
      );

      res.json(paymentConfirm);
    } catch (error) {}
  };
}
