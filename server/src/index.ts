import { join } from "path";
import app from "./app";

function main() {
  app.listen(app.get("port"), () => {
    console.log(join(__dirname, "views"))
    console.log(`Server on port ${app.get("port")}`);
  });
}

main();
