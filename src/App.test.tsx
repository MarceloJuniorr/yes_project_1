import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import App from "./App";


it("Test by Nome", () => {
  render(<App />);
  const test = screen.getByText("Nome");
  expect(test).toBeInTheDocument();
});

it("Test by Sobrenome", () => {
  render(<App />);
  const test = screen.getByText("Sobrenome");
  expect(test).toBeInTheDocument();
});

it("Test by email", () => {
  render(<App />);
  const test = screen.getByText("E-mail");
  expect(test).toBeInTheDocument();
});

it("Test by Observações", () => {
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
