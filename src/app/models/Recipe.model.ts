import { Ingredient } from './Ingredient.model';

export class Recipe {
    id: number; 
    name: string;
    ingredients: Ingredient[]; 
    preparationTime: string; 
    categoryId: number;
    views: number;
    imageUrl: string;
    lastViewed: number;
}
