import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // declaring it here means all child components will share the same instance of the service
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe:Recipe;

  setSelectedRecipe(event){
    this.selectedRecipe=event;
  }
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    
    // we subscribe to the event emitter in the recipes service
    // because we need to react to it and set the selectedRecipe
    // variable in this component - that variable is still shown
    // in the recipe detail component using property binding.
    this.recipeService.recipeSelected.subscribe(
      (recipe:Recipe)=>{
        this.setSelectedRecipe(recipe)
      }
    )
  }

}
