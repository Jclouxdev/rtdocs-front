import { Input } from "../ui/input";
import { InputValidators, type InputValidator } from "./InputValidators";

type InputType = "text" | "email" | "password" | "number" | "tel" | "url";

export type AppInputProps = {
  placeholder?: string,
  type: InputType,
  inputName: string,
  inputLabel?: string,
  inputValidationRules?: InputValidator[]
}

export const AppInput = ({placeholder, inputName, inputLabel, inputValidationRules, type}:AppInputProps) => {
  return (
    <div>
      <p>{inputLabel}</p>
      <Input placeholder={placeholder} name={inputName} type={type} className="bg-white placeholder:text-gray-400" />
      {inputValidationRules && <InputValidators validators={inputValidationRules} />}
    </div>
  )
};