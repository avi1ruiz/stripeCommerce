import Stripe from "stripe";
import enviroments from "../enviroment";

const stripe = new Stripe(<string>enviroments.STRIPE.SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export default stripe;
