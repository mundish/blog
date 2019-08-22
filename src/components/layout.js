import React from "react"
import Header from "./Header"

export default ({ children }) => (
  <div className="m-0 layout">
    <Header />
    {children}
  </div>
)
