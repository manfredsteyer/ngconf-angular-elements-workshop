import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: 'custom-checkbox'
})
export class CustomCheckboxDirective {

  // TODO: Provide checkedChange event
  // @Output() checkedChange = new EventEmitter<boolean>();

  // TODO: Provide handler for changed event and delegate to checkedChange
  // @HostListener('changed', ['$event'])
  // changed($event) {
  //   this.checkedChange.next($event.detail);
  // }

}
