import { createPool } from "mysql2/promise";
import enviroments from "../enviroment";

const pool = createPool({
  host: enviroments.MYSQL.HOST,
  port: Number(enviroments.MYSQL.PORT),
  user: enviroments.MYSQL.USER,
  password: enviroments.MYSQL.PASSWORD,
  database: enviroments.MYSQL.DATABASE,
});

export default pool;
