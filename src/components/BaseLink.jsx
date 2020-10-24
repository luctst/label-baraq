import React from "react";
import { Link } from "react-router-dom";

const BaseLink = ({ slug, children }) => (
  <Link to={`${process.env.PUBLIC_URL}${slug}`} className="link">
    {children}
  </Link>
);

export default BaseLink;
