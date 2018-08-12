import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  //this enables us to bind to this property from outside the component
  @Input() recipe:Recipe;

  //we are no longer going to do this, use service instead
  // this is asof lecture 108
  //@Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  onSelected(){
    //this.recipeSelected.emit();
    
    // the event emitter is a property of the service
    // and we can trigger that from anywhere
    this.recipeService.recipeSelected.emit(this.recipe)


  }
}
