import { ChangeEvent, useEffect, useState } from "react";
import "./styles.css";

interface ITextarea {
    text: string,
     name: string, 
     handleOnChange?: any,
     value?: string,
}

export function Textarea ({ text, name, handleOnChange,value }: ITextarea) {

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
            <textarea
            id={name}
            className="input"
            name={name}
            value={value}
            onChange={onChange}
></textarea>
        </div>

    );
}
   

