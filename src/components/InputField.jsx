import * as React from 'react';
import { InputFieldProps } from './types';

export const InputField: React.FC<InputFieldProps> = ({ label, type = "text", value, onChange, icon }) => {
  const inputId = `${label.toLowerCase()}-input`;
  
  return (
    <div className="flex flex-col w-full whitespace-nowrap">
      <label htmlFor={inputId} className="text-white">{label}</label>
      <div className="flex overflow-hidden gap-10 justify-between items-center px-4 py-2 mt-2 w-full bg-white rounded-md border border-solid border-stone-300 min-h-[32px]">
        <input
          id={inputId}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={label}
          className="w-full border-none outline-none text-stone-300"
          aria-label={label}
        />
        {icon && (
          <img
            loading="lazy"
            src={icon}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto rounded-3xl aspect-[0.92] w-[11px]"
          />
        )}
      </div>
    </div>
  );
};