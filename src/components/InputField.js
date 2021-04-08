import React from "react";

export const InputField = (props) => {
  return (
    <React.Fragment>
      <label>{props.label}</label>
      <section>
        <div>{props.iconName}</div>
        <input type={props.type} placeholder={props.placeholder} />
        {props.type === "password" && (
          <div>
            <button>View</button>
          </div>
        )}
      </section>
    </React.Fragment>
  );
};
