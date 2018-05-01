import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  recipes: Recipe[] = [
    new Recipe('Sugar Cookie', ['flour', 'sugar', 'milk'], ['Preheat oven to 375', 'mix ingredients in bowl', 'pour into other bowl', 'get baked']),
    new Recipe('Bread', ['flour', 'salt', 'water', 'egg'], ['Preheat oven to 375', 'mix ingredients in bowl', 'pour into other bowl', 'get baked']),
    new Recipe('Delicious Coffee', ['coffee', 'water'], ['Heat water to 200 degrees', 'grind coffee to salt like granuels', 'cover grounds with hot water', 'wait 30 seconds to bloom coffee', 'pour remaining water in circular motion over grounds'])
  ];

  constructor() {}
}
