import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEmail]'
})
export class EmailDirective {

  constructor(private er : ElementRef) {
  }

  @HostListener('blur') onBlur() {
    let email:string = this.er.nativeElement.value;
      console.log(email.search("gmail.com"));
      this.er.nativeElement.value = "Ahmedabad";
      this.er.nativeElement.value = email.toLowerCase();
  }


}
