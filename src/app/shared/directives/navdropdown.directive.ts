import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavdropdown]'
})
export class NavdropdownDirective {

  constructor() { }

  @HostListener('click', ['$event'])
  onClick(eve: Event) {
    let ele = <HTMLElement>eve.target
    // console.log(ele.closest('button')?.nextElementSibling);
    ele.closest('button')?.nextElementSibling?.classList.toggle('show')
  }


}
