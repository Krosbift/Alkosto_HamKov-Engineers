import { Component, ElementRef, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-catalog',
  imports: [],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss'
})
export class Catalog implements AfterViewInit, OnDestroy {
  private disposers: Array<() => void> = [];
  private leaveTimeouts = new Map<HTMLElement, any>();

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const dropdowns: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('li.dropdown');

    // Attach listeners to every dropdown in the menu
    dropdowns.forEach((dropdown) => {
      const trigger = dropdown.querySelector(':scope > a');
      const menu = dropdown.querySelector('.dropdown-menu') as HTMLElement | null;
      const closeBtn = menu ? menu.querySelector('.close-btn') as HTMLElement | null : null;

      // Close button inside menu (if present)
      if (closeBtn) {
        const off = this.renderer.listen(closeBtn, 'click', (ev: Event) => {
          ev.stopPropagation();
          this.renderer.removeClass(dropdown, 'open');
        });
        this.disposers.push(off);
      }
      // Desktop behaviour: open/close by click on trigger (not hover)
      if (window.innerWidth > 900 && trigger) {
        const off = this.renderer.listen(trigger, 'click', (ev: Event) => {
          ev.preventDefault();
          ev.stopPropagation();
          // toggle this dropdown and close others
          const isOpen = dropdown.classList.contains('open');
          dropdowns.forEach((d) => this.renderer.removeClass(d, 'open'));
          if (!isOpen) {
            this.renderer.addClass(dropdown, 'open');
          }
        });
        this.disposers.push(off);
      }
    });

    // Close any open dropdown when clicking outside (solo desktop)
    const offDoc = this.renderer.listen('document', 'click', (ev: Event) => {
      if (window.innerWidth > 900) {
        const target = ev.target as Node;
        const inside = this.el.nativeElement.contains(target);
        if (!inside) {
          dropdowns.forEach((d) => this.renderer.removeClass(d, 'open'));
        }
      }
    });
    this.disposers.push(offDoc);
  }

  ngOnDestroy(): void {
    // remove all listeners and clear timeouts
    this.disposers.forEach((d) => d());
    this.leaveTimeouts.forEach((t) => clearTimeout(t));
    this.leaveTimeouts.clear();
    this.disposers = [];
  }
}
