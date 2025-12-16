import { useEffect, useState } from "react";

export default function Home() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    // setcount(5);
    // console.log("Re-Render Done");
    // return () => {
    // }
  }, [count]);

  function changeNum() {
    setcount(Math.floor(Math.random() * 100) + 1);
  }
  return (
    <div className="container">
      <div className="my-35 text-center ">
        <h2
          className={
            count >= 50
              ? "text-green-600 text-3xl my-5 font-medium"
              : "text-red-600 text-3xl my-5 font-medium"
          }
        >
          Home Component Count : {count}
        </h2>
        <button
          className={
            count >= 50
              ? "px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800 transition-colors cursor-pointer duration-300"
              : "px-4 py-2 bg-red-600 text-white rounded hover:bg-red-800 transition-colors cursor-pointer duration-300"
          }
          onClick={() => changeNum()}
        >
          Click To Change Count
        </button>
      </div>
    </div>
  );
}
