import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
    console.log(this.selectedRecipe);
  }

}
