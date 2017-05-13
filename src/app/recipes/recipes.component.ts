import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: {recipeName: string, recipeDesc: string};

  constructor() { }

  ngOnInit() {
  }
  
  onSelectRecipe(recipeSelectionData: {recipeName: string, recipeDesc: string}){
    this.selectedRecipe = recipeSelectionData; 
  }

}
