import { Ingredient } from './ingredient.model';
import { Direction } from './direction.model';
export class Recipe {
  constructor(public title: string, public ingredients: Ingredient[], public directions: Direction[]) {}
}
