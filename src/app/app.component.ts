import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedView: string;

  constructor(){
    this.selectedView = "recipes";
  }
  
  onViewSelected(selectedViewData: {selectedView: string}){
    this.selectedView = selectedViewData.selectedView;
  }
}
