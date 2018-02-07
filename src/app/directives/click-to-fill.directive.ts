import { Directive, ElementRef, OnInit, Renderer2, HostListener, Input } from '@angular/core';


@Directive({ selector: '[appClickToFill]' })
export class ClickToFillDirective {
    // tslint:disable-next-line:no-input-rename
    @Input('appClickToFill') color = 'red';

    @HostListener('click', ['$event']) onclick(ev: MouseEvent) {
        this.renderer.setStyle(ev.target, 'color', this.color);
    }

    constructor(private renderer: Renderer2) { }
}
