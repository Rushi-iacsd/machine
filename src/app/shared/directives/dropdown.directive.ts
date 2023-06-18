import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }


  @HostListener('click', ['$event'])
  onClick(eve: Event) {
    let ele = <HTMLElement>eve.target
    // console.log(ele.closest('button')?.nextElementSibling);
    ele.nextElementSibling?.classList.toggle('show')
  }

}
