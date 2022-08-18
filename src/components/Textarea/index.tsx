import { useEffect, useState } from "react";
import "./styles.css";

interface ITextarea {
    text: string,
     name: string, 
     handleOnChange?: any,
     value?: string,
}

export function Textarea ({ text, name, handleOnChange,value }: ITextarea) {

    const onChange = () => {
        if(handleOnChange){
            handleOnChange()
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
   

