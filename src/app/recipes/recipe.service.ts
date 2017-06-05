import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model'

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A tasty Schnitzel',
      'So delicious, much german, such wow',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Pork', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      'King Burger',
      'Clearly more delicious than Burger King',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    )
  ];

  getRecipes() {
    //why slice? so we only get copy of recipes
    // - and not change the recipes in this file
    //(arr is obj so pass by reference = need to make copy to prevent pass by reference )
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    
  }
}
