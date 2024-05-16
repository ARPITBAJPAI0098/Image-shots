// src/ImageDisplay.js
import React, { useState } from "react";
import images from "./Images.js";
const ImageDisplay = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loader, setLoader] = useState(false);

  const handleonload = () => {
    setTimeout(() => {
      setLoader(false);
    }, 1000); // Delay of 2 seconds
  };
  const handleonerror = () => {
    setLoader(false);
    alert("Error loading image");
  };

  const handleButtonClick = (image) => {
    setLoader(true);
    setSelectedImage(image);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Dynamic Shots</h1>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        {loader && <div className="loading">Loading...</div>}
        {selectedImage && (
          <div
            style={{
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              border: "1px solid #808080",
              padding: "5px",
            }}
          >
            <div>ID: {selectedImage.id}</div>
            <img
              src={selectedImage.src}
              alt="Display"
              onLoad={handleonload}
              onError={handleonerror}
              style={{
                display: loader ? "none" : "block",
                width: "300px",
                height: "300px",
              }}
            />
            <div>Name: {selectedImage.name}</div>
            <div>Email: {selectedImage.email}</div>
          </div>
        )}
      </div>
      <div>
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => handleButtonClick(image)}
            style={{
              padding: "10px 20px",
              margin: "5px",
              border: "none",
              borderRadius: "5px",
              color: "#333",
              cursor: "pointer",
              boxShadow: "0 2px 4px rgba(30, 4, 5, 10)",
              backgroundColor: "#ADD8E6",
            }}
          >
            {image.id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageDisplay;
