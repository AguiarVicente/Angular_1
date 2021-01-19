import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private elementRef: ElementRef, private render: Renderer2) { 
    // this.elementRef.nativeElement.style.backgroundColor = "yellow"; // evitar por causa de segurança
    this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }

}
