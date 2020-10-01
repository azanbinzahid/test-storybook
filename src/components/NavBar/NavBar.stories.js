import React from "react";
import NavBar from "./NavBar";

export default {
  title: "Bootstrap/NavBar",
  component: NavBar,
  args: {
    brandText: "My Navbar",
    navLinks: ["Home", "Profile"],
  },
};

const Template = (args) => <NavBar {...args} />;

export const Light = Template.bind({});
Light.args = {
  bg: "light",
  buttonVariant: "outline-success",
};
export const Dark = Template.bind({});
Dark.args = {
  bg: "dark",
  textColor: "white",
  buttonVariant: "success",
};
export const Primary = Template.bind({});
Primary.args = {
  bg: "primary",
  textColor: "white",
  buttonVariant: "light",
};

export const Secondary = Template.bind({});
Secondary.args = {
  bg: "secondary",
  textColor: "white",
  buttonVariant: "success",
};
