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

export default router;
