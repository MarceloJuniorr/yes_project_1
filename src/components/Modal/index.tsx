import { useEffect, useState } from "react";
import "./styles.css";
import { Button } from "../Button";


interface IModal {
  text: object;
  open: boolean;
  onClose?: Function;
}

export function Modal({
  text,
  open,
  onClose
}: IModal) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClose = () => {
    setIsOpen(false);
    if(onClose){onClose()}
  };
  

  useEffect(() => {
    setIsOpen(open);

  }, [open]);



  // não retornar div vazia
  return (
    <div>
      {isOpen && (
        <div className="modal">
          <div>
            <h2>Alert</h2>
            
              {
                Object.values(text).map((value, index) => {
                  return (<div key= {index}>{value}</div>)
                }) 
              }
            

              <Button 
                button= "Fechar"
                type= "button"
                onClick= {handleOnClose}
                testid= 'closeModal'
            />

          </div>
        </div>
      )}
    </div>
  );
}
