import React from "react";

export default function TextInput({
  placeholder = "",
  type = "text",
  id = "",
  value = "",
  onChange = (e) => {},
}) {
  return (
    <input
      id={id}
      className="rectangle"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}
