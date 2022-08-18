import { useEffect, useState } from "react";
import { ObjectDestructuringAssignment } from "typescript";
import "./styles.css";


interface ISelect {
    text: string,
    name: string, 
    handleOnChange?: any,
    value?: string,
    options: object
}




export function Select ({ text, name, handleOnChange,value, options }: ISelect) {


    const onChange = () => {
        if(handleOnChange){
            handleOnChange()
        }
    }

    return ( 
        <div>
            <label htmlFor={name}>{text}</label>
        <select name={name} id={name} className="input">
            <option>Selecione uma opção</option>
            {Object.entries(options).map(([index, data]) => {
            return (<option key={index} value={data.id} >{data.name}</option>);
          })}
        </select>
        </div>

    );
}
   