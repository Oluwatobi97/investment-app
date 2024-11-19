import React from "react";
import { LabelAndError } from "../cells/LabelAndError";
import { Input } from "../cells/Input";

const FormInput = ({ error, type, placeholder, register, name, className }) => {
  return (
    <LabelAndError error={error} name={name}>
      <Input
        name={name}
        placeholder={placeholder}
        register={register}
        type={type}
        className={className}
      />
    </LabelAndError>
  );
};

export default FormInput;
