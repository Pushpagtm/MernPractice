import { Router } from "express";
import {
  changeCurrentPassword,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/user.controller.js";
import {
  DeleteUserId,
  UpdateUserId,
  createUser,
  fetchUser,
  fetchUserId,
} from "../controllers/userForm.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  DeletePostId,
  UpdatePostId,
  createPost,
  fetchPostId,
  getAllPost,
  getFeaturedPost,
  getRecentPost,
} from "../controllers/post.controller.js";
import { createImage } from "../controllers/imageproces.controller.js";
// import { upload } from "../middlewares/multer.middleware.js";
const router = Router();

router.route("/register").post(
  // upload.fields([
  //   {
  //     name: "avatar",
  //     maxCount: 1,
  //   },
  //   {
  //     name: "coverImage",
  //     maxCount: 1,
  //   },
  // ]),
  registerUser
);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/create").post(createUser);
router.route("/get").get(fetchUser);
router.route("/get/:id").get(fetchUserId);
router.route("/update/:id").put(UpdateUserId);
router.route("/delete/:id").delete(DeleteUserId);
router.route("/createPost").post(createPost);
router.route("/getAllPost").get(getAllPost);
router.route("/get/:id").get(fetchPostId);
router.route("/update/:id").put(UpdatePostId);
router.route("/delete/:id").delete(DeletePostId);
router.route("/recent").get(getRecentPost);
router.route("/featured").get(getFeaturedPost);
router.route("/imageProcess").get(createImage);

export default router;
