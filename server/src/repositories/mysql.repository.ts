import { v4 as uuid } from "uuid";
import { IProduct } from "../models/product.model";
import { CrudRepository } from "../libs/IRepository";
import pool from "../configuration/mysql.database";

export class MySQLRepository implements CrudRepository<IProduct> {
  async list(): Promise<IProduct[]> {
    const [rows] = (await pool.execute("SELECT * FROM products")) as [
      IProduct[],
      unknown
    ];
    return rows;
  }

  async show(id: string): Promise<IProduct> {
    const [rows] = (await pool.execute("SELECT * FROM products WHERE id = ?", [
      id,
    ])) as [IProduct[], unknown];
    return rows[0];
  }

  async store({ name, price, photo }: Partial<IProduct>): Promise<void> {
    const id = uuid();
    await pool.query(
      "INSERT INTO products (id, name, price, photo) VALUES (?, ?, ?, ?)",
      [id, name, price, photo]
    );
  }

  async destroy(id: string): Promise<void> {
    await pool.execute("DELETE FROM products WHERE id = ?", [id]);
  }

  async update(
    { name, price, photo }: Partial<IProduct>,
    id: string
  ): Promise<IProduct> {
    await pool.query(
      "UPDATE products SET name = ?, price = ?, photo = ? WHERE id = ?",
      [name, price, photo, id]
    );

    return this.show(id);
  }
}
