import { Recipe } from "./recipe.model";
import { ThrowStmt } from "../../../node_modules/@angular/compiler";


export class RecipeService {

    // array of recipes

    private recipes:Recipe[]= [
        new Recipe('A Test Recipe','This is a test','https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/2094/letterbox_ChickenChorizoPaella593x426.jpg'),
        new Recipe('Another Test Recipe','This is another test','https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/2094/letterbox_ChickenChorizoPaella593x426.jpg')
      ]

    
    getRecipes(){
        //this copies the original array rather than pass ref
        return this.recipes.slice()
    }

}