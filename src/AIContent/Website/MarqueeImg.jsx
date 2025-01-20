import React from "react";
import Marquee from "react-fast-marquee";
import aboutImage from "./images/about.png";

export default function MarqueeImg({ direction, images }) {
  return (
    <div
      className="marquee-container"
      style={{ marginTop: "10px", marginBottom: "10px" }}
      dir="ltr"
    >
      {/* Marquee specific ltr direction override */}
      <Marquee
        loop={1000}
        speed={200}
        direction={direction}
        pauseOnHover={true}
      >
        {images?.map((image, index) => (
          <img
            src={image}
            alt={`Image ${index + 1}`}
            style={{
              width: "600px",
              height: "400px",
              objectFit: "cover",
              //borderRadius: '10px',
            }}
          />
        ))}
      </Marquee>
    </div>
  );
}
