import { useEffect, useState } from "react";
import "./styles.css";
import { Button } from "../Button";


interface IModal {
  nome: string;
  sobrenome: string;
  estado: string;
  email: string;
  observacao: string;
  open: boolean;
  onClose: any;
}

export function Modal({
  nome,
  sobrenome,
  estado,
  email,
  observacao,
  open,
  onClose
}: IModal) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClose = () => {
    setIsOpen(false);
    onClose();
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
            <p>
              Nome Completo:
              <br />
              {nome} {sobrenome}
              <br />
              <br />
              Estado:
              <br />
              {estado}
              <br />
              <br />
              E-Mail: <br /> {email}
              <br />
              <br />
              Observação: <br /> {observacao} <br />

              <Button 
                button= "Fechar"
                type= "button"
                onClick= {handleOnClose}
                testid= 'closeModal'
            />
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
