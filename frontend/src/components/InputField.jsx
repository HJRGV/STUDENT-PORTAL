import React from 'react';

const InputField = ({ type, name, placeholder, value, onChange, ...props }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    {...props}
  />
);

export default InputField;
