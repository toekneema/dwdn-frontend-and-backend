import React from "react";
import Lottie from "lottie-react";
import bouncyShapes from "../assets/lottie/bouncy_shapes.json";

export const LoadingScreen = () => {
  return (
    <div className="mt-12 flex justify-center">
      <Lottie
        animationData={bouncyShapes}
        loop
        autoplay
        style={{ height: 200, width: 200 }}
      />
    </div>
  );
};
