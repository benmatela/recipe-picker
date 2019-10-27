import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe.model';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  recipies: Recipe[] = [];
  suggestions: Recipe[] = [];

  constructor(private router: Router, private recipeService: RecipeService) {
   }

  ngOnInit() {
    if (isNullOrUndefined(this.selectedRecipe)) {
      this.onRecipes();
    }
    this.recipeService.addView(this.selectedRecipe);
    this.suggestions = this.onGetSuggestions();
  }

  onRecipes() {
    this.router.navigate(['recipe']);
  }

  onGetSuggestions() {
    return this.recipeService.getSuggestion(this.selectedRecipe);
  }

  onSelectSuggestion(suggestion: Recipe) {
    this.selectedRecipe = null;
    this.suggestions = [];
    
    this.selectedRecipe = suggestion;
    this.suggestions = this.onGetSuggestions();
    this.recipeService.addView(this.selectedRecipe);
  }

}
