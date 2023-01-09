import React from "react";

export default function Input(props) {
  const { children, type = "text", ...rest } = props;
  return <input className="ui-textfield" type={type} {...rest} />;
}
