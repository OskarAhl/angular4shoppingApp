import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test Recipe', 'test',
    'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
    new Recipe('Another test Recipe', 'test',
    'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg')
  ];

  getRecipes() {
    //why slice? so we only get copy of recipes
    // - and not change the recipes in this file
    //(arr is obj so pass by reference = need to make copy to prevent pass by reference )
    return this.recipes.slice();
  }
}
