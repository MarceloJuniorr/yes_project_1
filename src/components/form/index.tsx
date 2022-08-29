import { SyntheticEvent, useEffect, useState } from "react";
import "./styles.css";
import { Input } from "../Input"
import { Button } from "../Button";
import { Select } from "../SelectList";
import { Textarea } from "../Textarea";
import { Modal } from "../Modal";



interface IForm {
     name?: string, 
     handleOnSubmit?: any,
     object: object,
}

export function Form ({name, handleOnSubmit, object}: IForm) {

    const [user, setUser] = useState({})



    const submit = (e: SyntheticEvent) => {
        e.preventDefault()
        if(handleOnSubmit){
            handleOnSubmit(user)
        }   
    }

    const handleChange= (name: string, value: string) => {

        setUser({...user, [name]: value})




    }

    useEffect(() => { }, [])

    return ( 
        <form onSubmit={submit} className="dados" key='form'>


            {Object.entries(object).map(([index, data]) => {

                if (data.type == "STRING" || data.type == "TEXT") {
            return (
                <div key= {index} >

                    <Input 
                    type="text"
                    text={data.display_text.des}  
                    name={data.column_json}
                    placeholder={data.display_text.des}
                    handleOnChange={handleChange}
                    />

                </div>
            );
                } 
                else if (data.type == "SELECT") {
                    let options = [
                        {
                            "id": 1,
                            "name": "Minas Gerais"
                        },
                        {
                            "id": 2,
                            "name": "São Paulo"
                        }
                
                    ]
                            return (

                                <div key={index}>
                                    <Select 
                                    name={data.column_json}
                                    text={data.display_text.des}
                                    options={options}
                                    handleOnChange={handleChange}

                                    />
                                    
                                </div>
                            )
                    } 
                    else if (data.type == "TEXTAREA") {
                        return (

                            <div key={index}>

                                <Textarea 
                                text={data.display_text.des}  
                                name={data.column_json}
                                handleOnChange={handleChange}
                                />
                            </div>
                        )
                    }
                    
            
                    
                }
          )}

            <div className="container" key="container">
            <Button 
                button= "Enviar"
                type= "submit"
                testid= 'btnEnviar'
            
            />
            
            <Button 
                button= "Limpar"
                type= "reset"
                testid= 'btnLimpar'
            />

            </div>

        </form>

        

    );
}
   