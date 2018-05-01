import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';
import { Ingredient } from './models/ingredient.model';
import { Direction } from './models/direction.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  directions: Direction[] = [
    new Direction('Preheat oven to 375'),
    new Direction('mix ingredients in bowl'),
    new Direction('pour into other bowl'),
    new Direction('get baked')
  ]

  ingredients: Ingredient[] = [
    new Ingredient('flour'),
    new Ingredient('sugar'),
    new Ingredient('milk')
  ]
  recipes: Recipe[] = [
    new Recipe('Sugar Cookie', this.ingredients, this.directions)
  ];
  selectedRecipe = null;


  editRecipe(clickedRecipe){
    this.selectedRecipe = clickedRecipe;
  }

  finishEditing(){
    this.selectedRecipe = null;
  }

  constructor() {}
}
