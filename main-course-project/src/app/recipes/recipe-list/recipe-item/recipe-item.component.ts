import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  //this enables us to bind to this property from outside the component
  @Input() recipe:Recipe;

  constructor() { }

  ngOnInit() {
  }

}
