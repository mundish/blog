import React from "react";
import Header from "./Header";

export default ({ children }) => (
  <div className="m-0 max-w-3xl mx-auto p-5">
    <Header />
    {children}
  </div>
);
