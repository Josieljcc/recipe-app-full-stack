import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import mockRouter from "next-router-mock";
import Login from "./page";

jest.mock("next/navigation", () => require("next-router-mock"));
jest.mock("../utils/apiFunctions", () => ({
  postLogin: jest.fn().mockResolvedValue({
    email: "josiel.jcc@hotmail.com",
    id: 6,
    name: "josiel",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Impvc2llbC5qY2NAaG90bWFpbC5jb20iLCJpZCI6NiwibmFtZSI6Impvc2llbCJ9.4i1Xh92h0K0sr9mGKYI_8gUirQv-cC94YmNlnnzF60Q",
  }),
}));

describe("<Login />", () => {
  beforeEach(() => {
    mockRouter.push("/login");
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should render default correctly", async () => {
    render(<Login />);
    const email = screen.getByTestId("email");
    const password = screen.getByTestId("password");
    const buttonLogin = screen.getByRole("button", { name: /enter/i });

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(buttonLogin).toBeInTheDocument();
  });

  it("should redirect to /register", async () => {
    act(() => {
      render(<Login />, { wrapper: MemoryRouterProvider });
    });
    const registerLink = screen.getByRole("link", {
      name: /Don't have a acount?/i,
    });
    expect(registerLink).toBeInTheDocument();
    act(() => {
      fireEvent.click(registerLink);
    });
    expect(mockRouter.asPath).toEqual("/register");
  });

  it("should button enter is disabled invalid email", () => {
    act(() => {
      render(<Login />);
    });
    const buttonEnter = screen.getByRole("button", { name: /enter/i });
    expect(buttonEnter).toBeInTheDocument();
    expect(buttonEnter).toBeDisabled();
    const password = screen.getByTestId("password");
    const email = screen.getByTestId("email");
    act(() => {
      fireEvent.input(email, {
        target: { value: "asdfasdf" },
      });
      fireEvent.input(password, {
        target: { value: "asdfasdf" },
      });
    });
    expect(buttonEnter).toBeDisabled();
  });

  it("should button enter is disabled invalid password", () => {
    act(() => {
      render(<Login />);
    });
    const buttonEnter = screen.getByRole("button", { name: /enter/i });
    expect(buttonEnter).toBeInTheDocument();
    expect(buttonEnter).toBeDisabled();
    const password = screen.getByTestId("password");
    const email = screen.getByTestId("email");
    act(() => {
      fireEvent.input(email, {
        target: { value: "test@test.com" },
      });
      fireEvent.input(password, {
        target: { value: "12" },
      });
    });
    expect(buttonEnter).toBeDisabled();
  });

  it("should enable the button when the form is valid", async () => {
    act(() => {
      render(<Login />);
    });
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const submitButton = screen.getByRole("button", { name: "Enter" });
    act(() => {
      fireEvent.input(emailInput, {
        target: { value: "josiel.jcc@hotmail.com" },
      });
      fireEvent.input(passwordInput, {
        target: { value: "asdfasdf" },
      });
    });
    await waitFor(() => {
      expect(submitButton).toBeEnabled();
    });
  });

  it("should redirect to /home when login", async () => {
    act(() => {
      render(<Login />, { wrapper: MemoryRouterProvider });
    });
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const submitButton = screen.getByRole("button", { name: "Enter" });
    act(() => {
      fireEvent.input(emailInput, {
        target: { value: "josiel.jcc@hotmail.com" },
      });
      fireEvent.input(passwordInput, {
        target: { value: "asdfasdf" },
      });
    });
    await waitFor(() => {
      expect(submitButton).toBeEnabled();
      act(() => {
        fireEvent.click(submitButton);
      });
      expect(mockRouter.asPath).toEqual("/home/0");
    });
  });
});
