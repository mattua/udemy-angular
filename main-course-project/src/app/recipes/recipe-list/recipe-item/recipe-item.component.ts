import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  template: `
  
  <a href="#" class="list-group-item clearfix"
(click)="onSelected()">
    <!--so in response to the click event built in on this href
    we call the onSelected method within this component-->
    <div class="pull-left">
        <h4 class="list-group-item-heading">{{recipe.name}}</h4>
        <p class="list-group-item-heading">{{recipe.description}}</p>
    </div>
    <span class="pull-right">
        <img 
        [src]="recipe.imagePath" 
        alt="{{recipe.name}}" 
        class="img-responsive" style="max-height: 50px;">
    </span>

</a>
  `,
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
