import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import { createDynamicRouteParser } from "next-router-mock/dynamic-routes";
import mockRouter from "next-router-mock";
import Main from "./page";

// mockRouter.useParser(createDynamicRouteParser(["/home/[page]"]));
jest.mock("next/navigation", () => require("next-router-mock"));
jest.mock("../../utils/apiFunctions", () => ({
  getRecipeBySearch: jest.fn().mockResolvedValue([
    {
      ID: 6,
      CreatedAt: "2023-06-17T17:02:59.403Z",
      UpdatedAt: "2023-06-17T17:02:59.403Z",
      DeletedAt: null,
      title: "Recipe 1",
      instructions: "Place 2 chamomile tea bags in a heatsafe vessel",
      image: "image_1",
      ingredients: [
        {
          ID: 58,
          CreatedAt: "2023-06-17T17:02:59.403Z",
          UpdatedAt: "2023-06-17T17:02:59.403Z",
          DeletedAt: null,
          name: "'2 chamomile tea bags",
          recipes: null,
        },
        {
          ID: 59,
          CreatedAt: "2023-06-17T17:02:59.403Z",
          UpdatedAt: "2023-06-17T17:02:59.403Z",
          DeletedAt: null,
          name: "1½ oz. reposado tequila",
          recipes: null,
        },
      ],
      users: null,
    },
  ]),
  getFavorites: jest.fn().mockResolvedValue([
    {
      ID: 6,
      CreatedAt: "2023-06-17T17:02:59.403Z",
      UpdatedAt: "2023-06-17T17:02:59.403Z",
      DeletedAt: null,
      title: "Recipe 1",
      instructions: "Place 2 chamomile tea bags in a heatsafe vessel",
      image: "image_1",
      ingredients: [
        {
          ID: 58,
          CreatedAt: "2023-06-17T17:02:59.403Z",
          UpdatedAt: "2023-06-17T17:02:59.403Z",
          DeletedAt: null,
          name: "'2 chamomile tea bags",
          recipes: null,
        },
        {
          ID: 59,
          CreatedAt: "2023-06-17T17:02:59.403Z",
          UpdatedAt: "2023-06-17T17:02:59.403Z",
          DeletedAt: null,
          name: "1½ oz. reposado tequila",
          recipes: null,
        },
      ],
      users: null,
    },
  ]),
  getRecipes: jest.fn().mockResolvedValue([
    {
      ID: 6,
      CreatedAt: "2023-06-17T17:02:59.403Z",
      UpdatedAt: "2023-06-17T17:02:59.403Z",
      DeletedAt: null,
      title: "Recipe 1",
      instructions: "Place 2 chamomile tea bags in a heatsafe vessel",
      image: "image_1",
      ingredients: [
        {
          ID: 58,
          CreatedAt: "2023-06-17T17:02:59.403Z",
          UpdatedAt: "2023-06-17T17:02:59.403Z",
          DeletedAt: null,
          name: "'2 chamomile tea bags",
          recipes: null,
        },
        {
          ID: 59,
          CreatedAt: "2023-06-17T17:02:59.403Z",
          UpdatedAt: "2023-06-17T17:02:59.403Z",
          DeletedAt: null,
          name: "1½ oz. reposado tequila",
          recipes: null,
        },
      ],
      users: null,
    },
    {
      ID: 7,
      CreatedAt: "2023-06-17T17:02:59.403Z",
      UpdatedAt: "2023-06-17T17:02:59.403Z",
      DeletedAt: null,
      title: "Recipe 2",
      instructions: "Place 2 chamomile tea bags in a heatsafe vessel",
      image: "image_2",
      ingredients: [
        {
          ID: 58,
          CreatedAt: "2023-06-17T17:02:59.403Z",
          UpdatedAt: "2023-06-17T17:02:59.403Z",
          DeletedAt: null,
          name: "'2 chamomile tea bags",
          recipes: null,
        },
        {
          ID: 59,
          CreatedAt: "2023-06-17T17:02:59.403Z",
          UpdatedAt: "2023-06-17T17:02:59.403Z",
          DeletedAt: null,
          name: "1½ oz. reposado tequila",
          recipes: null,
        },
      ],
      users: null,
    },
  ]),
}));

const storagePrototype = {
  getItem: function (key: string) {
    return localStorageMock[key] || null;
  },
  setItem: function (key: string, value: string) {
    localStorageMock[key] = value.toString();
  },
  removeItem: function (key: string) {
    delete localStorageMock[key];
  },
};

export const localStorageMock = Object.create(storagePrototype);

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("<Main />", () => {
  beforeEach(() => {
    mockRouter.push("/home/0");
    localStorage.setItem("user", JSON.stringify({ token: "teste" }));
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should render default correctly", async () => {
    await waitFor(() => {
      act(() => {
        render(<Main params={{ page: "0" }} />);
      });
    });
    const nextButton = screen.getByTestId("next");
    const prevButton = screen.getByTestId("prev");
    const recipesImages = screen.getAllByTestId("recipe-image");
    const recipesTitles = screen.getAllByTestId("recipe-title");
    const isFavorite = screen.getAllByTestId("isfavorite");
    expect(isFavorite.length).toBe(1);
    expect(recipesImages.length).toBe(2);
    expect(recipesTitles.length).toBe(2);
    expect(recipesTitles[0]).toHaveTextContent("Recipe 1");
    expect(recipesTitles[1]).toHaveTextContent("Recipe 2");
    expect(recipesImages[0]).toHaveAttribute(
      "src",
      "http://localhost:3001/images/image_1.jpg"
    );
    expect(recipesImages[1]).toHaveAttribute(
      "src",
      "http://localhost:3001/images/image_2.jpg"
    );
    expect(nextButton).toBeInTheDocument();
    expect(prevButton).toBeInTheDocument();
  });
  it("should render next page correctly", async () => {
    await waitFor(() => {
      act(() => {
        render(<Main params={{ page: "0" }} />);
      });
    });

    const nextButton = screen.getByTestId("next");
    act(() => {
      fireEvent.click(nextButton);
    });

    await waitFor(() => {
      expect(mockRouter.pathname).toBe("/home/1");
    });
  });
  it("should back to page 0", async () => {
    await waitFor(() => {
      act(() => {
        render(<Main params={{ page: "1" }} />);
      });
    });

    const prevbutton = screen.getByTestId("prev");
    act(() => {
      fireEvent.click(prevbutton);
    });

    await waitFor(() => {
      expect(mockRouter.pathname).toBe("/home/0");
    });
  });
  it("should search correctly", async () => {
    await waitFor(() => {
      act(() => {
        render(<Main params={{ page: "1" }} />);
      });
    });

    const searchInput = screen.getByTestId("search");
    const searchButton = screen.getByTestId("search");
    act(() => {
      fireEvent.input(searchInput, { target: { value: "teste" } });
      fireEvent.click(searchButton);
    });
    const recipesImages = screen.getAllByTestId("recipe-image");
    const recipesTitles = screen.getAllByTestId("recipe-title");
    expect(recipesImages[0]).toHaveAttribute(
      "src",
      "http://localhost:3001/images/image_1.jpg"
    );
    expect(recipesTitles[0]).toHaveTextContent("Recipe 2");
  });
});
