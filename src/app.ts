import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import * as productController from "./controllers/productController";
import connect from "./connect";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("port", process.env.PORT || 3000);

const db: string = "mongodb://127.0.0.1:27017/local";
connect(db);

/**
 * API Base Endpoint
 * */

app.get("/", (req: Request, res: Response) => res.send("hi"));

/**
 * APi Endpointss
 */
app.get("/products", productController.allProducts);
app.get("/product/:id", productController.showProduct);
app.post("/product", productController.addProduct);
app.put("/product/:id", productController.updateProduct);
app.delete("/product/:id", productController.deleteProduct);

const server = app.listen(app.get("port"), () => {
  console.log(`Server is running on port ${app.get("port")}`);
});
