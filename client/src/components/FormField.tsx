// import React from "react";

import { ChangeEvent } from "react";

type FormFieldProps = {
  labelName: string;
  type: string;
  name: string;
  placeholder?: string;
  value: string;
  isSurprise?: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSurpriseMe?: (e: React.MouseEvent) => void;
};

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  isSurprise,
  handleChange,
  handleSurpriseMe,
}: FormFieldProps) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-grey-900"
        >
          {labelName}
        </label>
        {isSurprise && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs py-1 px-2 bg-[#ececf1] rounded-[5px] text-black"
          >
            Surpirse me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        required
        onChange={handleChange}
        className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-[theme(colors.textPrimary)] focus:border-[theme(colors.textPrimary)] outline-none block w-full p-3"
      />
    </div>
  );
};

export default FormField;
