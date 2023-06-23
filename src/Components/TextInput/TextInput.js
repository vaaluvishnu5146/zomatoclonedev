import React from "react";

export default function TextInput({ placeholder = "", type = "" }) {
  return <input className="rectangle" placeholder={placeholder} type={type} />;
}
