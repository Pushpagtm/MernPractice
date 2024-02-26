import mongoose, { Schema } from "mongoose";

const userFormSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  age: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
});

export const UserFormModel = mongoose.model("UserForm", userFormSchema);
