import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import App from "./App";
  
function preencheCampos()  {

  const testValues = ['Marcelo', "Junior", 'marcelojunior.07@live.com','São Paulo' ,'teste']

  const {getByTestId} = render(<App />);
  const inputName = getByTestId('inputName');
  const inputSobrenome = getByTestId('inputSobrenome');
  const inputEmail = getByTestId('inputEmail');
  const inputEstado = getByTestId('inputEstado');
  const inputObservacao = getByTestId('inputObservacao');


  userEvent.type(inputName, testValues[0]);
  userEvent.type(inputSobrenome, testValues[1]);
  userEvent.type(inputEmail, testValues[2]);
  userEvent.type(inputObservacao, testValues[4]);
  userEvent.selectOptions(inputEstado, [testValues[3]])
  return testValues

}


it("Verifica campo Nome", () => {
  render(<App />);
  const test = screen.getByText("Nome");
  expect(test).toBeInTheDocument();
});

it("Verifica campo Sobrenome", () => {
  render(<App />);
  const test = screen.getByText("Sobrenome");
  expect(test).toBeInTheDocument();
});

it("Verifica campoemail", () => {
  render(<App />);
  const test = screen.getByText("E-mail");
  expect(test).toBeInTheDocument();
});

it("Verifica campo Observações", () => {
  render(<App />);
  const test = screen.getByText("E-mail");
  expect(test).toBeInTheDocument();
});

it('Verifica se possui botão enviar', () => {
  render(<App />);
  const buttonEnviar = screen.getByRole("button", {name: /Enviar/i});
  expect(buttonEnviar).toBeInTheDocument();
})

it('Verifica se possui botão Limpar',  () => {
  render(<App />);
  const buttonLimpar = screen.getByRole("button", {name: /Limpar/i});
  expect(buttonLimpar).toBeInTheDocument();
})

it('Verificando limpeza dos campos', () => {


  const testValues = preencheCampos();


  expect(screen.getByDisplayValue(testValues[0])).toBeInTheDocument()
  expect(screen.getByDisplayValue(testValues[1])).toBeInTheDocument()
  expect(screen.getByDisplayValue(testValues[2])).toBeInTheDocument()
  expect(screen.getByDisplayValue(testValues[3])).toBeInTheDocument()
  expect(screen.getByDisplayValue(testValues[4])).toBeInTheDocument()

  const buttonLimpar = screen.getByTestId('btnLimpar');
  userEvent.click(buttonLimpar);

  expect(screen.queryByDisplayValue(testValues[0])).not.toBeInTheDocument();
  expect(screen.queryByDisplayValue(testValues[1])).not.toBeInTheDocument();
  expect(screen.queryByDisplayValue(testValues[2])).not.toBeInTheDocument();
  expect(screen.queryByDisplayValue(testValues[3])).not.toBeInTheDocument();
  expect(screen.queryByDisplayValue(testValues[4])).not.toBeInTheDocument();

 })

it('Testando Modal',  () => {
  const testValues = preencheCampos();

  const testText = 'Nome Completo:'+ testValues[0] + ' '+ testValues[1] + 'Estado:'+ testValues[3] + 'E-Mail: '+ testValues[2] + 'Observação: '+ testValues[4];
  const submitButton = screen.getByTestId('btnEnviar');
  userEvent.click(submitButton);

  expect(screen.getByText(testText)).toBeInTheDocument();
  
  const btnCloseModal = screen.getByTestId('closeModal')

  userEvent.click(btnCloseModal);
  expect(screen.queryByText(testText)).not.toBeInTheDocument();




});


