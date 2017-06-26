import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Output
} from '@angular/core';

@Directive({ selector: '[clickOutside]' })
export class ClickOutsideDirective {

    @Output() public onClickOutside = new EventEmitter();
    element: HTMLElement;

    constructor(private el: ElementRef) {
       this.element = el.nativeElement;
    }

    @HostListener('document:click', ['$event.target']) public handleClick(targetElement: HTMLElement) {
        const clickInside = this.el.nativeElement.contains(targetElement);
        if (!clickInside) {
            this.onClickOutside.emit(null);
        }
    }
}
