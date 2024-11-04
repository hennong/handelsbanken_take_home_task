import { ChangeEventHandler } from "react";

interface ITextInput {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  className?: string;
}

function TextInput({
  value,
  onChange,
  placeholder,
  className = "",
}: ITextInput) {
  return (
    <div>
      <input
        className={`border border-[#4b595e] rounded-md p-0.5 ${className}`}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextInput;
