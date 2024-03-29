import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  imageData: { type: String, required: true },
  height: { type: Number, required: true },
  width: { type: Number, required: true },
});
export const ImageForm = mongoose.model("Image", imageSchema);
