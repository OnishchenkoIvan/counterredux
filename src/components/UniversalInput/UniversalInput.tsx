import React, { ChangeEvent } from "react";

type UniversalInputPropsType = {
  type: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className: string;
};

export const UniversalInput = (props: UniversalInputPropsType) => {
  const { type, placeholder, onChange, className } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  );
};
