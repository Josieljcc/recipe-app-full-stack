import { IIngredient } from "./IIngredient";

export interface IRecipe {
    ID: number;
    title: string;
    instructions: string;
    ingredients: IIngredient[];
    image: string;
}