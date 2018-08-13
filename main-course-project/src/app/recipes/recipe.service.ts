import { Recipe } from "./recipe.model";
import { ThrowStmt } from "../../../node_modules/@angular/compiler";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>()

    constructor(private slService:ShoppingListService){}
    // array of recipes

    private recipes:Recipe[]= [
        new Recipe('Tasty Schnitzel','This is a test','https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/2094/letterbox_ChickenChorizoPaella593x426.jpg',
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
        ]),
        new Recipe('Big Fat Burger','This is another test','https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/2094/letterbox_ChickenChorizoPaella593x426.jpg',
        [
            new Ingredient('Buns',2),
            new Ingredient('Meat',1)
        ])
      ]

    
    getRecipes(){
        //this copies the original array rather than pass ref
        return this.recipes.slice()
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        // the particular instance of shopping list service will
        // update its own list and also emit an event
        
        this.slService.addIngredients(ingredients)
    }
}