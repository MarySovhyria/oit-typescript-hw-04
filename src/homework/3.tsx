import React, { useState, ChangeEvent } from 'react';

type InputProps = {
  value: string;
  type: "string";
  onChange: (value: string) => void;
}

export function FormComponent({ value, type, onChange }: InputProps) {
  const [inputValue, setInputValue] = useState<string>(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value;

    if (type === 'string') {
      setInputValue(newValue);
    }

    onChange(newValue);
  };

  return (
    <input type="text" value={inputValue} onChange={handleChange} />
  );
}