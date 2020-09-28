import React from "react";
import SectionHeading from "./SectionHeading";

export default {
  title: "SectionHeading",
  component: SectionHeading,
};

export const Primary = () => (
  <SectionHeading variant="primary">Primary Heading</SectionHeading>
);

export const Secondary = () => (
  <SectionHeading variant="secondary">Secondary Heading</SectionHeading>
);

export const Danger = () => (
  <SectionHeading variant="danger">Danger Heading</SectionHeading>
);

export const Warning = () => (
  <SectionHeading variant="warning">Warning Heading</SectionHeading>
);
