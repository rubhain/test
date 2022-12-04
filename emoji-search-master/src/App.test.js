import React from "react";
import App from "./App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("All Test", () => {
  beforeEach(() => render(<App />));

  it("renders without crashing", () => {
    const div = document.createElement("div");
  });

  it("header test", () => {
    const headerComp = screen.getByText("Emoji Search");
    expect(headerComp).toBeInTheDocument;
  });

  it("listing test", () => {
    const items = screen.getAllByText("Click to copy emoji");
    expect(items.length).toEqual(20);
  });

  it("filter test", () => {
    const inputValue = "100";
    const input = screen.getByRole("textbox");
    userEvent.type(input, inputValue);
    expect(screen.getAllByText(inputValue)).toBeInTheDocument;
  });

  it("click copy test", () => {
    const text = screen.getAllByText("Click to copy emoji");
    const input = screen.getByRole("textbox");
    userEvent.click(text);
    userEvent.paste(input, text);
    expect(input.length === 1);
  });
});
