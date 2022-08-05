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
  const test = screen.getByText("Sobrenomes");
  expect(test).toBeInTheDocument();
});
