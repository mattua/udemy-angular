import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[]

  constructor(private slService:ShoppingListService) { }

  ngOnInit() {

    this.ingredients=this.slService.getIngredients()
    
    // all the ingredients are copied wholesale from the
    // latest array in the service
    this.slService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients=ingredients
      }
  )
  }

  
}
