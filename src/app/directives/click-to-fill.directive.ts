import { Directive, ElementRef, OnInit, Renderer2, HostListener, Input } from '@angular/core';


@Directive({ selector: '[appClickToFill]' })
export class ClickToFillDirective {

    @HostListener('click', ['$event']) onclick(ev: MouseEvent) {
        this.renderer.setStyle(ev.target, 'color', this.getColor());
    }

    constructor(private renderer: Renderer2) { }

    private getColor() {
        return '#' + ('000000' + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    }
}
