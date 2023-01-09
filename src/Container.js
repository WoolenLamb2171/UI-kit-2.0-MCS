import React from "react";

export default function Container(props) {
  const { children, ...rest } = props;
  return (
    <div className="ui-container" {...rest}>
      {children}
    </div>
  );
}
