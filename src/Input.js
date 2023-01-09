import React from "react";
import clsx from "clsx";

export default function Input(props) {
  const { className, children, type, ...rest } = props;
  const classes = clsx("ui-textfield", className);
  const inputType = clsx({ text: !props.type }, type);
  console.log(inputType);
  return <input className={classes} type={inputType} {...rest} />;
}

