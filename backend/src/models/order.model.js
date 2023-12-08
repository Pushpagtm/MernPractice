import mongoose from "mongoose";
const OrderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  Quantity: {
    type: Number,
    required: true,
  },
});
const OrderSchema = new mongoose.Schema(
  {
    OrderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItems: [OrderItemSchema],
  },
  { timestamps: true }
);
export const Order = mongoose.model("Order", OrderSchema);
