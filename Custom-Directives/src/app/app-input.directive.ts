import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInput]'
})
export class AppInputDirective {

  constructor(private er : ElementRef) { }

  @HostListener('blur') onBlur() {
    let value : string = this.er.nativeElement.value;
    this.er.nativeElement.value = value.toLowerCase();
  }

}
