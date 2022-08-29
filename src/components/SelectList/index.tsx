import { FormEvent, useEffect, useState } from "react";
import { ObjectDestructuringAssignment } from "typescript";
import "./styles.css";


interface ISelect {
    text: string,
    name: string, 
    handleOnChange?: any,
    value?: string,
    options: object
}




export function Select ({ text, name, handleOnChange, options }: ISelect) {

    const onChange = (value: FormEvent) => {
        if(handleOnChange){
            let inputName = (value.target as HTMLInputElement).name ;
            let inputValue = (value.target as HTMLInputElement).value;
            handleOnChange(inputName, inputValue)
        }
    }

    return ( 
        <div>
            <label htmlFor={name}>{text}</label>
        <select name={name} className="input" onChange={onChange}>
            <option>Selecione uma opção</option>
            {Object.entries(options).map(([index, data]) => {
            return (<option key={index} value={data.name}   >{data.name}</option>);
          })}
        </select>
        </div>

    );
}
   