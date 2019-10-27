import { Injectable } from '@angular/core';
import { Recipe } from '../models/Recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[] = [
    {
      id: 1,
      name: 'Cheese Burger',
      ingredients: [
        { id: 1, name: 'Cheddar' },
        { id: 2, name: 'Patty' },
        { id: 3, name: 'Lettuce' },
        { id: 4, name: 'Pickles' }
      ],
      preparationTime: '20-25 Mins',
      categoryId: 1,
      views: 0,
      imageUrl: 'https://images.spoonacular.com/file/wximages/423186-636x393.png'
    },
    {
      id: 2,
      name: 'Cake',
      ingredients: [
        { id: 1, name: 'Icing Sugar' },
        { id: 2, name: 'Eggs' },
        { id: 3, name: 'Milk' }
      ],
      preparationTime: '40-50 Mins',
      categoryId: 2,
      views: 0,
      imageUrl: 'https://spoonacular.com/recipeImages/579247-556x370.jpg'
    },
    {
      id: 2,
      name: 'Pizza',
      ingredients: [
        { id: 1, name: 'Cheddar' },
        { id: 2, name: 'Spare Ribs' },
        { id: 3, name: 'Pineapple' },
        { id: 4, name: 'Pickles' }
      ],
      preparationTime: '30 Mins',
      categoryId: 3,
      views: 0,
      imageUrl: 'https://spoonacular.com/productImages/35507-636x393.jpg'
    }
  ]
  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  addView(recipeInput: Recipe): void {
    this.recipes.forEach(recipe => {
      if (recipeInput === recipe) {
        recipe.views += 1;
      }
    });
  }

  getSuggestion(selectedRecipe: Recipe): Recipe[] {
    let result: Recipe[] = [];
    this.recipes.forEach(recipe => {

      if (recipe.ingredients.length < selectedRecipe.ingredients.length) {
        recipe.ingredients.forEach((ingredient, index) => {
          if (ingredient.name === selectedRecipe.ingredients[index].name) {
            if (recipe !== selectedRecipe && !result.includes(recipe)) {
              result.push(recipe);
            }
          }
        });
      } else {
        selectedRecipe.ingredients.forEach((ingredient, index) => {
          if (ingredient.name === recipe.ingredients[index].name) {
            if (recipe !== selectedRecipe && !result.includes(recipe)) {
              result.push(recipe);
            }
          }
        });
      }
    });
    return result;
  }
}
