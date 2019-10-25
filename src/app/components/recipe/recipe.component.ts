import { Component, OnInit, HostListener } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipes: Recipe[] = [];
  selectedRecipe: Recipe;

  isViewRecipe: boolean = false;

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    this.isViewRecipe = false;
    this.router.navigate(['recipe']);
  }

  constructor(private recipeService: RecipeService, private router: Router) {
   }

  ngOnInit() {
    this.getRecipes();
  }

  onGetRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.isViewRecipe = true
  }

  onRecipes() {
    this.isViewRecipe = false;
    this.getRecipes();
  }

  getRecipes() {
    this.recipes = this.recipeService.getRecipes();
  }

}
