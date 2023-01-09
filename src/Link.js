import React from "react";

export default function Link(props) {
  const { children, ...rest } = props;
  return (
    <a {...rest} className="ui-link">
      {children}
    </a>
  );
}
