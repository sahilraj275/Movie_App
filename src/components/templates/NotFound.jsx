import React from "react";
// import notfound from "/notfound.gif"; // Correctly reference the loading GIF

function NotFound() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {/* <img
        className="w-[10%] h-[18%]" // Set the image size to be 30% of the parent
        src={}
        alt="Loading..."
      />  */}
      <h1 className="text-5xl font-black text-white text-center">Not Found</h1>
    </div>
  );
}

export default NotFound;
