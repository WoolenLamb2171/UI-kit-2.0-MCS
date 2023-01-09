import React from "react";
import clsx from "clsx";

export default function Button(props) {
  const { disabled, children, ...rest } = props;
  const connection = clsx({ disabled: props.disabled, abled: !props.disabled });
  console.log(connection);
  return (
    <button className="ui-button" disabled={connection} {...rest}>
      {children}
    </button>
  );
}
