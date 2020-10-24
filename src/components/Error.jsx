import React from "react";

const Error = ({ children }) => (
  <span className="error">{children || "Une erreur est survenue."}</span>
);

export default Error;
