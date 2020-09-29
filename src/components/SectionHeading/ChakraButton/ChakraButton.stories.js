import React from "react";
import { Button } from "@chakra-ui/core";

export default {
  title: "Chakra/Button",
  component: Button,
  args: {
    children: "Button",
  },
};

export const Success = () => <Button variantColor="green"> Success </Button>;
export const Danger = () => <Button variantColor="red"> Danger </Button>;

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variantColor: "green",
  children: "Primary Arg",
};

export const PrimaryANoChildren = Template.bind({});
PrimaryANoChildren.args = {
  variantColor: "green",
};

export const PrimaryANoArgs = Template.bind({});
