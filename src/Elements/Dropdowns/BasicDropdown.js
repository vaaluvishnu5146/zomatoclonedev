import React from "react";

export default function BasicDropdown({
  label = "",
  id = "",
  options = [],
  value = "",
  onSelect = (e) => {},
}) {
  return (
    <div className="mb-3 text-start">
      <label for={id} class="form-label">
        {label}
      </label>
      <select
        id={id}
        class="form-select"
        aria-label="Default select example"
        value={value}
        onChange={onSelect}
      >
        {options.map((o, i) => (
          <option key={`${id}-option-${i}`} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
