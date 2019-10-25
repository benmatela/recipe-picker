import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {
    this.recipes = this.recipeService.getRecipes();
   }

  ngOnInit() {
  }

}
