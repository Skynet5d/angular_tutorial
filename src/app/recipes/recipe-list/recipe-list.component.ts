import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Pizza', 'The best pizza ever!','https://upload.wikimedia.org/wikipedia/commons/f/f0/Pepperoni_pizza_with_basil.jpg'),
    new Recipe('Lasagne', 'The best lasagne ever!','https://upload.wikimedia.org/wikipedia/commons/f/f0/Pepperoni_pizza_with_basil.jpg'),
    new Recipe('Pasta', 'The best pasta ever!','https://upload.wikimedia.org/wikipedia/commons/f/f0/Pepperoni_pizza_with_basil.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
