import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ImageForm } from "../models/imageprocess.model.js";
// const sharp = require("sharp");
const createImage = asyncHandler(async (req, res) => {
  try {
    // Get the image data from the request body
    const { imageData, width, height } = req.body;

    // Process the image using Sharp
    const processedImageBuffer = await sharp(imageData)
      .resize(width, height)
      .toBuffer();

    // Send the processed image as a response
    res.set("Content-Type", "image/jpeg");
    res.send(processedImageBuffer);
  } catch (err) {
    // Handle errors
    console.error("Error processing image:", err);
    res.json(
      new ApiResponse(200, processedImageBuffer, "Image processed Successfully")
    );
  }
});

export { createImage };
