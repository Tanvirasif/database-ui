import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
  // No styleUrls here — all visual styles live in the global style.css
  // (see README: add it to the "styles" array in angular.json).
})
export class HeaderComponent {
  @Input() databaseBusiness: any[] = [];
  @Input() currentView: 'structure' | 'data' = 'structure';
  @Output() viewChange = new EventEmitter<'structure' | 'data'>();

  dbDropdownOpen = false;
  businessSearchQuery = '';
  filteredBusinesses: any[] = [];
  currentBusinessName: string = '';

  ngOnChanges() {
    this.filteredBusinesses = [...this.databaseBusiness];
    if (this.databaseBusiness.length > 0) {
      this.currentBusinessName = this.databaseBusiness[0].name;
    }
  }

  toggleDbDropdown() {
    this.dbDropdownOpen = !this.dbDropdownOpen;
    if (this.dbDropdownOpen) {
      this.businessSearchQuery = '';
      this.filterBusinesses();
    }
  }

  filterBusinesses() {
    if (!this.businessSearchQuery) {
      this.filteredBusinesses = [...this.databaseBusiness];
    } else {
      const query = this.businessSearchQuery.toLowerCase();
      this.filteredBusinesses = this.databaseBusiness.filter(b =>
        b.name.toLowerCase().includes(query)
      );
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.db-dropdown-wrapper')) {
      this.dbDropdownOpen = false;
    }
  }



  selectView(view: 'structure' | 'data'): void {
    this.viewChange.emit(view);
  }
}