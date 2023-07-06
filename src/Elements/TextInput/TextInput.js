import React, { forwardRef } from "react";

const TextInput = forwardRef(function TextInput(
  {
    label = "",
    type = "",
    id = "",
    placeholder = "",
    value = "",
    onChange = (e) => {},
    disabled = false,
  },
  ref
) {
  return (
    <div class="mb-3 text-start">
      <label for={id} class="form-label">
        {label}
      </label>
      <input
        type={type}
        class="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        ref={ref}
      />
    </div>
  );
});

export default TextInput;
