import { useEffect, useState } from "react";
import "./styles.css";

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
              <input
                data-testid='closeModal'
                type="button"
                value="Fechar"
                className="button"
                onClick={handleOnClose}
              />
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
