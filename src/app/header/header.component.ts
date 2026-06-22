import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
  // No styleUrls here — all visual styles live in the global style.css
  // (see README: add it to the "styles" array in angular.json).
})
export class HeaderComponent {
  @Input() currentView: 'structure' | 'data' = 'structure';
  @Output() viewChange = new EventEmitter<'structure' | 'data'>();

  selectView(view: 'structure' | 'data'): void {
    this.viewChange.emit(view);
  }
}