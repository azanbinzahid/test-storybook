import React from "react";
import "./SectionHeading.css";
function SectionHeading(props) {
  const { variant = "primary", children, ...rest } = props;
  return (
    <div align="center">
      <p className={`section-heading ${variant}`} {...rest}>
        {children}
      </p>
    </div>
  );
}

export default SectionHeading;
