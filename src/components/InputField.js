import { useState } from "react";

export const InputField = (props) => {

  const [fieldType, setFieldType] = useState(props.type);

  const toogleView = () => {
    if (fieldType === 'password') {
      setFieldType('text');
    } else {
      setFieldType('password');
    }
  }

  return (
    <div className="field">
      <label>{props.label}</label>
      <section>
        <div>{props.iconName}</div>
        <input type={fieldType} placeholder={props.placeholder} />
        {props.type === "password" && (
          <div className="view">
            <button onClick={() => toogleView()}>View</button>
          </div>
        )}
      </section>
    </div>
  );
};
