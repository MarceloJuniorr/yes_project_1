import { useEffect, useState } from "react";
import "./styles.css";

interface IInput {
    text: string,
     type: string, 
     name: string, 
     handleOnChange?: any,
     value?: string,
     placeholder: string
}

export function Input ({ text, type, name, handleOnChange,value, placeholder }: IInput) {

    const onChange = () => {
        if(handleOnChange){
            handleOnChange()
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
            onChange={onChange}
          />
        </div>

    );
}
   