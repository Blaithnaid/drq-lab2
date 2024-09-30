import React from "react";

const Content = () => {
  return (
    <div>
      <h1> Hello World! </h1>
      <h2> It is currently {new Date().toLocaleTimeString()}</h2>
    </div>
  );
};

export default Content;
