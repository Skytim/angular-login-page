import { AuthService } from './../services/auth.service';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: "[accInput]" })
export class AccInputDirective {
  private el: HTMLInputElement;
  @Input() hideAccount: boolean = false;
  constructor(private elementRef: ElementRef, private authService: AuthService) {

    this.el = this.elementRef.nativeElement;
  }
  @HostListener("focus", ["$event.target.value"])
  onFocus(value: any) {
    this.el.value = this.el.getAttribute('originalVal') || '';
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value: any) {
    let originalVal = this.el.getAttribute('originalVal') || '';
    if(this.hideAccount){
      this.el.value = this.authService.disPlayAcc(originalVal);
    }else{
      this.el.value = originalVal;
    }
  }

  @HostListener("change", ["$event.target.value"])
  onChange(value: any) {
    this.el.setAttribute('originalVal', value);
  }
}
