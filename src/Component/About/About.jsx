import React, { useRef } from "react";

export default function About() {
  const divRef = useRef(null);

  return (
    <>
      <div className="container">
        <h1 ref={divRef}>Lorem ipsum dolor sit.</h1>
        <button
          onClick={() => {
            console.log(divRef.current);
          }}
          className="btn mt-7 bg-blue-100 hover:bg-blue-400 dark:bg-blue-700 dark:hover:bg-blue-900 "
        >
          Click to show RefDiv
        </button>
      </div>
    </>
  );
}
