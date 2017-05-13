import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('viewSelected') navClicked = new EventEmitter<{selectedView: string}>();

  constructor() { }

  ngOnInit() {
  }
  
  onNavClick(selectedViewEvent: Event){
    this.navClicked.emit({
      selectedView: (<HTMLElement>selectedViewEvent.target).id
    });
  }

}
