import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TestComponent } from "./comp";
import { expect } from "vitest";

describe("TestComponent", () => {
  it('renders "Hello" text', () => {
    render(<TestComponent />);
    const textElement = screen.getByText(/Hello/i);
    expect(textElement).toBeInTheDocument();
  });
});
