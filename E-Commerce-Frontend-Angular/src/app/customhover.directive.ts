import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomhover]'
})
export class CustomhoverDirective {

  constructor(private ref:ElementRef) { }
  ngOnInit() {



    this.ref.nativeElement.addEventListener('mouseover', e => {
      this.ref.nativeElement.style.maxHeight = 'inherit';
    })
      this.ref.nativeElement.addEventListener('mouseout', e => {
      
      this.ref.nativeElement.style.maxHeight = '3.5em';

    })

  }
}
