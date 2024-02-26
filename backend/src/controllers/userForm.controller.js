import { asyncHandler } from "../utils/asyncHandler.js";
import { UserFormModel } from "../models/userForm.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const createUser = asyncHandler(async (req, res) => {
  // get user details from frontend
  // validation - not empty

  const { name, email, age } = req.body;
  if ([name, email, age].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const userForm = await UserFormModel.create({
    name,
    email,
    age,
  });

  if (!userForm) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, userForm, "User created Successfully"));
});
export { createUser };
