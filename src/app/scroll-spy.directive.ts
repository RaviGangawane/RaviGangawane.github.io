import { Directive, Injectable, Input, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[scrollSpy]',
    standalone: true
})

export class ScrollSpyDirective {
    @Input() public spiedTags: string[] = [];
    @Output() public sectionChange = new EventEmitter<string>();
    private currentSection: string = "1";

    constructor(private _el: ElementRef) { }

    @HostListener('scroll', ['$event'])
    onScroll(event: any) {
        let currentSection: string = "1";
        const children = this._el.nativeElement.children;
        const scrollTop = event.target.scrollTop;
        const parentOffset = event.target.offsetTop;
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    }

}
