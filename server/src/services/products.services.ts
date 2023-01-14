import { NextFunction, Request, Response } from "express";
import { CrudRepository } from "../libs/IRepository";
import { IProduct } from "../models/product.model";

export class ProductService {
  constructor(private repository: CrudRepository) {}

  index = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const products = <IProduct[]>await this.repository.list();
      res.json(products);
    } catch (error) {
      next(error);
    }
  };

  create = () => {};

  store = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { name, price, photo }: Partial<IProduct> = req.body;
      await this.repository.store({ name, price, photo });
      res.status(201).json({ message: "Creado exitosamente" });
    } catch (error) {
      next(error);
    }
  };

  show = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: string = req.params.id;
      res.json(await this.repository.show(id));
    } catch (error) {
      next(error);
    }
  };

  edit = () => {};

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: string = req.params.id;
      const { name, price, photo }: Partial<IProduct> = req.body;

      const productEdited = await this.repository.update(
        { name, price, photo },
        id
      );
      res.json(productEdited);
    } catch (error) {
      next(error);
    }
  };

  destroy = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: string = req.params.id;
      await this.repository.destroy(id);
      res.status(200).json({ message: "Eliminado exitosamente" });
    } catch (error) {
      next(error);
    }
  };
}
