import { asyncHandler } from "../utils/asyncHandler.js";
import { UserFormModel } from "../models/userForm.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Post } from "../models/post.model.js";
const getAllPost = asyncHandler(async (req, res) => {
  const posts = await Post.find();
  return res
    .status(201)
    .json(new ApiResponse(200, posts, "All posts fetched Successfully"));
});
const createPost = asyncHandler(async (req, res) => {
  const { title, content, author, featured } = req.body;
  if (
    [title, content, author, featured].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const postForm = await Post.create({
    title,
    content,
    author,
    featured,
  });

  if (!postForm) {
    throw new ApiError(500, "Something went wrong while creating the post");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, userForm, "Post created Successfully"));
});

const fetchPostId = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new ApiError(400, "User ID is required");
  }
  const postFetchId = await Post.findById(id);
  if (!postFetchId) {
    throw new ApiError(404, "user not found");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, postFetchId, "user fetched sucessfuly"));
});
const UpdatePostId = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new ApiError(400, "Post ID is rARFequired");
  }
  const postUpdateId = await UserFormModel.findByIdAndUpdate(id, req.body);
  if (!postUpdateId) {
    throw new ApiError(404, "user not found");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, postUpdateId, "post updated sucessfuly"));
});
const DeletePostId = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new ApiError(400, "post ID is required");
  }
  const PostDeleteId = await Post.findByIdAndDelete(id);
  if (!PostDeleteId) {
    throw new ApiError(404, "user not found");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, PostDeleteId, "user updated sucessfuly"));
});
export { getAllPost, createPost, fetchPostId, UpdatePostId, DeletePostId };
