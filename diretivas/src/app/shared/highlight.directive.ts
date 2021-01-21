import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') 
  onMouseOver(){
    // this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    return this.backgroundColor = this.heighlightColor;
  }

  @HostListener('mouseleave') 
  onMouseLeave(){
    // this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.background-color') 
  backgroundColor: string = '';

  @Input() defaultColor: string = 'white';
  @Input('highlight') heighlightColor: string = 'yellow';

  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor; 
  }

}
