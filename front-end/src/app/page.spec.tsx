import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import mockRouter from "next-router-mock";
import Home from "./page";

jest.mock("next/navigation", () => require("next-router-mock"));

describe("<Home />", () => {
  beforeEach(() => {
    mockRouter.push("/");
  });
  it("should render default correctly", () => {
    render(<Home />);
    const title = screen.getByRole("heading", { name: /Let's Cooking/i });
    const text = screen.getByText(/13k\+ Recipes/i);
    const button = screen.getByRole("button", { name: /Start Cooking/i });

    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  it("should render correctly when click button", () => {
    render(<Home />);
    const buttonHome = screen.getByRole("button", { name: /Start Cooking/i });
    expect(buttonHome).toBeInTheDocument();
    fireEvent.click(buttonHome);

    expect(mockRouter.asPath).toEqual("/login");
  });
});
