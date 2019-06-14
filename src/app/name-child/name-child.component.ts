import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-child',
  template: '<h3>"{{name}}"</h3>'
})
export class NameChildComponent {
  namea = '';

  @Input()
  set name(name: string) {
    this.namea = (name && name.trim()) || '<no name set>';
  }

  get name(): string { return this.namea; }
}
