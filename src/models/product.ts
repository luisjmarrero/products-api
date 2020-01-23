import mongoose from "mongoose";

// const uri: string = "mongodb://127.0.0.1:27017/local";

export interface ProductInterface extends mongoose.Document {
  name: string;
  category: string;
  brand: string;
  description: string;
  original_price: number;
  actual_price: number;
  images: string[];
}

export const ProductSchemma = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  original_price: { type: mongoose.Schema.Types.Decimal128, required: true },
  actual_price: { type: mongoose.Schema.Types.Decimal128, required: true },
  images: { type: [String], required: false }
});

const Product = mongoose.model<ProductInterface>("Product", ProductSchemma);
export default Product;
