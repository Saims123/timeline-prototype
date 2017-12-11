import { Directive, OnInit, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective implements OnInit {
  mouseup = new EventEmitter();
  mousedown = new EventEmitter();
  mousemove = new EventEmitter();

  @HostListener('document:mouseup', ['$event'])
  onMouseup(event) {
    this.mouseup.emit(event);
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event) {
    this.mousedown.emit(event);
    return false; // Call preventDefault() on the event
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove(event) {
    this.mousemove.emit(event);
    this.element.nativeElement.style.left.px = event.clientX;
  }

  constructor(public element: ElementRef) {

  }
  ngOnInit() {

  }
}
