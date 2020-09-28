import React from "react";
import "./SectionHeading.css";
function SectionHeading(props) {
  const { variant = "primary", children, ...rest } = props;
  return (
    <p className={`section-heading ${variant}`} {...rest}>
      {children}
    </p>
  );
}

export default SectionHeading;
