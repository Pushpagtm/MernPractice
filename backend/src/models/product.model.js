import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    description: {
      required: true,
      type: string,
    },
    name: {
      required: true,
      type: string,
    },
    productImage: {
      type: string,
    },
    price: {
      type: number,
      default: 0,
    },
    stock: {
      type: number,
      default: 0,
    },
    Category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    Owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
export const Product = mongoose.model("Product", productSchema);
