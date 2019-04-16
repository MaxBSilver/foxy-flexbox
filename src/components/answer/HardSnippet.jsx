import React from "react";

export default function HardSnippet(props) {
  return (
    <div className="input-three">
      <p className="code-prompt"> flex-wrap : </p>
      <input
        type="text"
        className="search-input"
        name="fwVal"
        value={props.fwVal}
        onChange={props.handleChange}
        placeholder=""
      />
    </div>
  );
}
