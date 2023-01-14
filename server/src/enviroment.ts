import { config } from "dotenv";
import { join } from "path";

config({
  path: join(__dirname, ".env"),
});

/* Se colocan las variables de entorno, para facilitar el autocompletado */
const enviroments = {
  SERVER: {
    PORT: process.env.PORT,
  },
  MYSQL: {
    PORT: process.env.MYSQL_PORT,
    HOST: process.env.MYSQL_HOST,
    DATABASE: process.env.MYSQL_DATABASE,
    USER: process.env.MYSQL_USER,
    PASSWORD: process.env.MYSQL_PASSWORD,
  },
};

export default enviroments;
