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
const fetchUser = asyncHandler(async (req, res) => {
  const userFetch = await UserFormModel.find({});

  if (!userFetch || userFetch.length === 0) {
    throw new ApiError(500, "Something went wrong while fetching the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, userFetch, "User fetched Successfully"));
});
const fetchUserId = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new ApiError(400, "User ID is required");
  }
  const userFetchId = await UserFormModel.findById(id);
  if (!userFetchId) {
    throw new ApiError(404, "user not found");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, userFetchId, "user fetched sucessfuly"));
});
const UpdateUserId = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new ApiError(400, "User ID is rARFequired");
  }
  const userUpdateId = await UserFormModel.findByIdAndUpdate(id, req.body);
  if (!userUpdateId) {
    throw new ApiError(404, "user not found");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, userFetchId, "user updated sucessfuly"));
});
const DeleteUserId = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new ApiError(400, "User ID is required");
  }
  const userDeleteId = await UserFormModel.findByIdAndDelete(id);
  if (!userDeleteId) {
    throw new ApiError(404, "user not found");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, userFetchId, "user updated sucessfuly"));
});
export { createUser, fetchUser, fetchUserId, UpdateUserId, DeleteUserId };
