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
  imageUrl: string = '';

  constructor(private router: Router, private recipeService: RecipeService) {
   }

  ngOnInit() {
    if (isNullOrUndefined(this.selectedRecipe)) {
      this.router.navigate(['recipe']);
    }
    this.recipeService.addView(this.selectedRecipe);
    this.imageUrl = this.selectedRecipe.imageUrl;
  }

  onRecipes() {
    this.router.navigate(['recipe']);
  }

}
