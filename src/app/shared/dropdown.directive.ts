import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor() { }
  
  @HostBinding('class.open') isOpened = false;
  

  @HostListener('click') mouseclick(eventData: Event){
    this.isOpened = !this.isOpened;
  }

}
