import { ChangeEvent, useEffect, useState } from "react";
import "./styles.css";

interface IInput {
    text: string,
     type: string, 
     name: string, 
     handleOnChange?: Function,
     value?: string,
     placeholder: string
}

export function Input ({ text, type, name, handleOnChange,value, placeholder }: IInput) {

    const onChange = (value: ChangeEvent) => {
        if(handleOnChange){
            let inputName = (value.target as HTMLInputElement).name ;
            let inputValue = (value.target as HTMLInputElement).value;
            handleOnChange(inputName, inputValue)
        }
    }

    return ( 
        <div>
            <label htmlFor={name}>{text}</label>
            <input
            className="input"
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            value={value}
            onChange={(value) => onChange(value)}
          />
        </div>

    );
}
   