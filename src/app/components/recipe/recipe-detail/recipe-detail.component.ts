import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe.model';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(private router: Router, private recipeService: RecipeService) {
   }

  ngOnInit() {
    console.log(this.selectedRecipe);
    this.recipeService.addView(this.selectedRecipe.id);
  }

}
