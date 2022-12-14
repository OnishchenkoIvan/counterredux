import React, { ChangeEvent } from "react";

type UniversalInputPropsType = {
  type: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className: string;
  value: number;
};

export const UniversalInput = (props: UniversalInputPropsType) => {
  const { type, placeholder, onChange, className, value } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
      value={value}
    />
  );
};
