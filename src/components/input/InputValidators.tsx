import { Check, Ellipsis } from 'lucide-react';

export type InputValidator = {
  text: string,
  isValid: boolean
};

export type InputValidatorsProps = {
  validators: InputValidator[]
}

const defaultTextStyle = "text-gray-400 dark:text-gray-500";
const validTextStyle = "text-green-500 dark:text-green-400";


export const InputValidators = ({validators}: InputValidatorsProps) => {
  return (
    <ul>
      {validators.map((validator) => (
        <li 
          key={validator.text}
          className={`${validator.isValid ? validTextStyle : defaultTextStyle} flex items-center gap-2`}
        >
          {
            validator.isValid ? 
              <Check size={16} /> : 
              <Ellipsis size={16} />
          }
          {validator.text}
        </li>
      ))}
    </ul>
  )
}