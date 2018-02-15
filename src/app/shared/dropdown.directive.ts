import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
//need to attach class 'open' to div class 'btn-group'
  @HostListener('click') toggleOpen(){
  this.isOpen = !this.isOpen;
  }
}
