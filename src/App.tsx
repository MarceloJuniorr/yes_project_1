import "./styles.css";
import React, { useState } from "react";
import { Modal } from "./components/Modal";

export default function App() {
  const initialValue = "";
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [estado, setEstado] = useState("Minas Gerais");
  const [observacao, setObservacao] = useState("");
  const [showElement, setShowElement] = useState(false);

  const resetValues = () => {
    setNome(initialValue);
    setSobrenome(initialValue);
    setEmail(initialValue);
    setEstado("Minas Gerais");
    setObservacao(initialValue);
    setShowElement(false);
  };

  return (
    <div className="App">
      <div className="form">
        <div className="dados">
          <label>Nome</label>
          <input
            data-testid='inputName'
            name="nomeInput"
            className="input"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <label>Sobrenome</label>
          <input
            data-testid='inputSobrenome'
            className="input"
            type="text"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />

          <label>E-mail</label>
          <input
            data-testid='inputEmail'
            className="input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label> Estado</label>
          <select
            data-testid='inputEstado'
            className="input"
            onChange={(e) => setEstado(e.target.value)}
            value={estado}
          >
            <option value="Minas Gerais">Minas Gerais</option>
            <option value="São Paulo">São Paulo</option>
          </select>
          <label>
            <br /> Observação
          </label>
          <textarea
            data-testid='inputObservacao'
            className="input"
            name="observacao"
            value={observacao}
            onChange={(e) => setObservacao(e.target.value)}
          ></textarea>

          <div className="container">
            <input
              data-testid='btnEnviar'
              type="submit"
              value="Enviar"
              onClick={() => setShowElement(true)}
              className="button"
            />
            <input
              data-testid='btnLimpar'
              type="reset"
              value="Limpar"
              onClick={resetValues}
              className="button"
              id="clean"
            />
          </div>
        </div>
      </div>

      <Modal
        nome={nome}
        sobrenome={sobrenome}
        estado={estado}
        email={email}
        observacao={observacao}
        open={showElement}
        onClose={resetValues}
      />
    </div>
  );
}
