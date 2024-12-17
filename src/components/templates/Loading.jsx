import React from "react";
import loading from "/loading.gif"; // Correctly reference the loading GIF
import spinner from "/infinite-spinner.svg";
function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {" "}
      {/* Full screen dimensions */}
      <img
        className="w-[10%] h-[18%]" // Set the image size to be 30% of the parent
        src={spinner}
        alt="Loading..."
      />
    </div>
  );
}

export default Loading;
