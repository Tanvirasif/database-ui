import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() databaseBusiness: any[] = [];
  @Input() currentView: 'structure' | 'data' = 'structure';
  @Output() viewChange = new EventEmitter<'structure' | 'data'>();
  @Output() businessSelect = new EventEmitter<any>(); // <-- NEW: Emit selected business

  dbDropdownOpen = false;
  businessSearchQuery = '';
  filteredBusinesses: any[] = [];
  currentBusinessName: string = '';
  selectedBusinessId: number | null = null; // <-- NEW: Track selected business

  ngOnChanges() {
    this.filteredBusinesses = [...this.databaseBusiness];
    if (this.databaseBusiness.length > 0) {
      // Only set default if nothing selected yet
      if (!this.selectedBusinessId) {
        this.currentBusinessName = this.databaseBusiness[0].name;
        this.selectedBusinessId = this.databaseBusiness[0].id;
      }
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

  // NEW: Select a business
  selectBusiness(business: any) {
    this.selectedBusinessId = business.id;
    this.currentBusinessName = business.name;
    this.dbDropdownOpen = false;
    this.businessSelect.emit(business); // Emit to parent
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