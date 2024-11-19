import React from "react";
import { useForm } from "react-hook-form";
import SelectOption from "../../../design-system/form/cells/SelectOption";

export const FormComponent = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const options = [
    { value: "option1", label: "BTC" },
    { value: "option2", label: "USDT" },
    { value: "option3", label: "ETH" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SelectOption option={options} name="mySelect" register={register} />
    </form>
  );
};

export default FormComponent;
