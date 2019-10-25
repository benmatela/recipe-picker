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
  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    console.log('Back button pressed');
    this.router.navigate(['']);
  }

  recipes: Recipe[] = [];
  selectedRecipe: Recipe;

  isViewRecipe: boolean = false;

  constructor(private recipeService: RecipeService, private router: Router) {
    this.recipes = this.recipeService.getRecipes();
   }

  ngOnInit() {
    console.log(this.recipes);
  }

  onGetRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.isViewRecipe = true
  }

}
