import "./styles.css";
import React, { useState, useEffect } from "react";
import { Form } from "./components/form";
import { Modal } from "./components/Modal";


export default function App() {

  const json = {
    "success": true,
    "message": "Ok!",
    "data": {
      "metadata": {
        "objectclass": {
          "uuid_objectclass": "4515a137-cfb6-4ee9-83d9-e2f92e12ac83",
          "uuid": "4ef1fa29-729a-495e-a159-3aaf5e8b50f5",
          "des": "Formulário de Contato",
          "complement": "",
          "fields": {
            "firstname": {
              "uuid": "47f1abeb-b6d4-4095-acde-4bf962e2bee0",
              "column_json": "firstname",
              "type": "STRING",
              "display_text": {
                "des": "Nome"
              },
              "read_only": false
            },
            "lastname": {
              "uuid": "881cfdba-252c-457c-98a2-ef83a3f4286d",
              "column_json": "lastname",
              "type": "STRING",
              "display_text": {
                "des": "Sobrenome"
              },
              "read_only": false
            },
            "email": {
              "uuid": "0e61f0cd-e31f-4264-83eb-268093c47de3",
              "column_json": "email",
              "type": "STRING",
              "display_text": {
                "des": "E-mail"
              },
              "read_only": false
            },
            "state": {
              "uuid": "8071a913-cae2-4a26-bf9a-7fe06bde692c",
              "column_json": "state",
              "type": "SELECT",
              "display_text": {
                "des": "Estado"
              },
              "read_only": true
            },
            "obs": {
              "uuid": "78b8efbd-ee59-41fb-81e3-cff52cd8046a",
              "column_json": "obs",
              "type": "TEXTAREA",
              "display_text": {
                "des": "Observação"
              },
              "read_only": false
            }
          }
        }
      }
    }
  }

  const [object, setObject] = useState({});
  const [open, setIsOpen] = useState(false);
  const [modalObject, setModalObject] = useState ({});

  const openModal = (user: Object) => {
    setIsOpen(true)
    setModalObject(user)

}
const closeModal = () => {
  setIsOpen(false)


}

  useEffect(() => {
    setObject(Object.values(json.data.metadata.objectclass.fields));
    
  }, []
  );
  
  return (
    <div className="App">
      <div className="form">



              <Form object = {object} handleOnSubmit = {openModal} />
      </div>

            <Modal text={modalObject} open = {open} onClose={closeModal}/>
    </div>
  );
}
