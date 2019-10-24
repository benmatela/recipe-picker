import { Injectable } from '@angular/core';
import { Recipe } from '../models/Recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[] = [
    {
      id: 1, name: 'Spiced Chicken Wings', ingredients: [
        { id: 1, name: 'Oil' },
        { id: 2, name: 'Seafood Seasoning' },
        { id: 3, name: 'Butter' }
      ],
      preparationTime: '20-25 Mins', categoryId: 1
    },
    {
      id: 2, name: 'Za`atar Popcorn', ingredients: [
        { id: 1, name: 'Oil' },
        { id: 2, name: 'Seafood Seasoning' },
        { id: 3, name: 'Butter' }
      ],
      preparationTime: '5 Mins', categoryId: 2
    },
    {
      id: 2, name: 'Double Tomato Crostini', ingredients: [
        { id: 1, name: 'Sun-dried Tomato Spread' },
        { id: 2, name: 'Cherry Tomatoes' },
        { id: 3, name: 'Kosher Salt And Black Pepper' }
      ],
      preparationTime: '10 Mins', categoryId: 3
    }
  ]
  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes;
  }
}
