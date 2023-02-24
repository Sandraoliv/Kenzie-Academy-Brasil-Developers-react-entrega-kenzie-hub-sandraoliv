import React from "react";
import { StyledInput } from "./style";

export const Input = ({
  label,
  type,
  placeholder,
  register,
  error,
  ...rest
}) => {
  return (
    <StyledInput>
      {label && <label htmlFor={register?.name}>{label}</label>}
      <input
        type={type}
        id={register?.name}
        placeholder={placeholder}
        {...register}
        {...rest}
      />
      {error && <p>{error.message}</p>}
    </StyledInput>
  );
};
