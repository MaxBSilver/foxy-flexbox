import React from "react";

export default function EasySnippet(props) {
  return (
    <React.Fragment>
      <div className="input-one">
        <p className="code-prompt"> justify-content : </p>
        <input
          type="text"
          className="search-input"
          name="jcVal"
          value={props.jcVal}
          onChange={props.handleChange}
          placeholder=""
        />
      </div>
      <div className="input-two">
        <p className="code-prompt"> align-content : </p>
        <input
          type="text"
          className="search-input"
          name="acVal"
          value={props.acVal}
          onChange={props.handleChange}
          placeholder=""
        />
      </div>
    </React.Fragment>
  );
}
