import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'form'
})
export class PreventHashActionDirective {
  constructor(private el: ElementRef<HTMLFormElement>) {}

  @HostListener('submit', ['$event'])
  onSubmit(event: Event) {
    const form = this.el.nativeElement;
    const action = form.getAttribute('action');

    // If the form has action="#" (which causes navigation to '#' and breaks Angular router), prevent it
    if (action === '#') {
      event.preventDefault();
      // Remove the action attribute so future submissions don't navigate
      form.removeAttribute('action');
      return;
    }

    // Also guard against action values that are just a fragment like '#section' or encoded '%23'
    if (action && action.startsWith('#')) {
      event.preventDefault();
      form.removeAttribute('action');
      return;
    }

    if (action && action.includes('%23')) {
      event.preventDefault();
      form.removeAttribute('action');
      return;
    }
  }
}
