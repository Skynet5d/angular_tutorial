import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingredientNameInput: ElementRef;
  @ViewChild('amountInput') ingredientAmountInput: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }
  
  onAdd(){
    this.ingredientAdded.emit(
      new Ingredient(
        this.ingredientNameInput.nativeElement.value,
        this.ingredientAmountInput.nativeElement.value
      )
    );
  }

}
