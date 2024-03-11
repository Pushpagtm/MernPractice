import React, { useState } from "react";
import axios from "axios";

const ImageProcessingForm = () => {
  const [imageFile, setImageFile] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleProcessImage = async () => {
    if (imageFile) {
      try {
        const formData = new FormData();
        formData.append("imageData", imageFile);
        formData.append("width", width);
        formData.append("height", height);

        const response = await axios.post(
          "/api/v1/users/imageProcess",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        setProcessedImage(response.data);
      } catch (error) {
        console.error("Error processing image:", error);
      }
    } else {
      console.error("No file selected.");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <br />
      Width:{" "}
      <input
        type="number"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />
      Height:{" "}
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <br />
      <button onClick={handleProcessImage}>Process Image</button>
      {processedImage && (
        <img
          src={`data:image/jpeg;base64,${processedImage}`}
          alt="Processed Image"
        />
      )}
    </div>
  );
};

export default ImageProcessingForm;
