import { Request, Response } from "express";
import Product from "../models/product";

export const allProducts = (req: Request, res: Response) => {
  const products = Product.find((err: any, products: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(products);
    }
  });
};

export const showProduct = (req: Request, res: Response) => {
  const product = Product.findById(req.params.id, (err: any, product: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(product);
    }
  });
};

export const addProduct = (req: Request, res: Response) => {
  const product = new Product(req.body);
  product.save((err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(product);
    }
  });
};

export const updateProduct = (req: Request, res: Response) => {
  let product = Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err: any, product: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(product);
      }
    }
  );
};

export const deleteProduct = (req: Request, res: Response) => {
  const product = Product.deleteOne({ _id: req.params.id }, (err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Product deleted from database");
    }
  });
};