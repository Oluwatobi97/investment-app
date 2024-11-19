import React from "react";
import { useForm } from "react-hook-form";
import SelectOption from "../../../design-system/form/cells/SelectOption";

export const SelectOptionComponet = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const options = [
    { value: "option1", label: "victortobi2000@gmail.com" },
    { value: "option2", label: "Settings" },
    { value: "option3", label: "Notifications" },
    { value: "option4", label: "logOut" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SelectOption option={options} name="mySelect" register={register} />
    </form>
  );
};

export default SelectOptionComponet;
