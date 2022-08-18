import { useEffect, useState } from "react";
import "./styles.css";
import { Input } from "../Input"
import { Button } from "../Button";
import { Select } from "../SelectList";
import { Textarea } from "../Textarea";



interface IForm {
     name?: string, 
     handleOnSubmit?: any,
     object: object
}

export function Form ({name, handleOnSubmit, object }: IForm) {
    const [values, setValues] = useState({})


    const onSubmit = () => {
        if(handleOnSubmit){
            handleOnSubmit()
        }
    }

    useEffect(() => { }, [])

    return ( 
        <form action="" className="dados">


            {Object.entries(object).map(([index, data]) => {

                if (data.type == "STRING" || data.type == "TEXT") {
            return (
                <Input 
                type="text"
                text={data.display_text.des}  
                name={data.column_json}
                placeholder={data.display_text.des}
                />
            );
                } else if (data.type == "SELECT") {
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
                                <Select 
                                name={data.column_json}
                                text={data.display_text.des}
                                options={options}
                                />
                            )
                    } else if (data.type == "TEXTAREA") {
                        return (
                            <Textarea 
                            text={data.display_text.des}  
                            name={data.column_json}
                            />
                        )
                    }
                    
                    
                }
          )}

            <div className="container">
            <Button 
                button= "Enviar"
                type= "submit"
                onClick=  ""
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
   