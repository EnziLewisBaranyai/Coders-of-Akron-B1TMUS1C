import "@/styles/styles.css";
import React from "react";

export default async function yourMusic() {
  return (
    <div className="">
      <div className="text-center font-bold text-orange-400 text-xl text-align-center">
        Insights About Your Music!
      </div>
      <div className="border-2 border-white m-5">
        <div className="text-center text-orange-300 text-lg">
          Your Top 5 Songs:{" "}
        </div>
      </div>
      <div className="border-2 border-white m-5">
        <div className="text-center text-orange-300 text-lg">
          Recommended Songs:{" "}
        </div>
      </div>
      <div className="border-2 border-white m-5">
        <div className="text-center text-orange-300 text-lg">
          Your Top 5 Artists:{" "}
        </div>
      </div>
    </div>
  );
}
