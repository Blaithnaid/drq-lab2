import React from "react";

const Content = () => {
  return (
    // say hello world, then create a new date object and display the time by converting it to a string
    // the toLocaleTimeString() method gets its locale from the JS runtime environment
    <div>
      <h1> Hello World! </h1>
      <h2> It is currently {new Date().toLocaleTimeString()}</h2>
    </div>
  );
};

export default Content;
