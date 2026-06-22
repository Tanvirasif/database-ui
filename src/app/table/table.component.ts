import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ColumnStructure, DataRow } from '../models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
  // No styleUrls — visual styles live in the global style.css (see README).
})
export class TableComponent implements OnChanges {
  @Input() id: number | null = null;
  @Input() currentTable = '';
  @Input() view: 'structure' | 'data' = 'structure';
  @Input() structure: ColumnStructure[] = [];
  @Input() data: DataRow[] = [];

  @Output() toast = new EventEmitter<{ message: string; type: 'success' | 'error' | 'warning' | 'info' }>();
  @Output() structureChange = new EventEmitter<ColumnStructure[]>();
  @Output() dataChange = new EventEmitter<DataRow[]>();

  currentPage = 1;
  pageSize = 10;

  editModalOpen = false;
  editingColumn: ColumnStructure | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    // When tableId changes, fetch new data
    if (changes.id && this.id !== null) {
      this.currentPage = 1;
      this.fetchTableData(this.id);
    }

    if (changes.currentTable || changes.view) {
      this.currentPage = 1;
    }
  }

  /** Fetch data from API using table_id */
  fetchTableData(id: number): void {
    // this.loading = true;

    // Replace with your actual API call
    // Example:
    // this.http.get(`/api/tables/${tableId}/data`).subscribe({
    //   next: (response) => {
    //     this.data = response.data;
    //     this.dataChange.emit(this.data);
    //     this.loading = false;
    //   },
    //   error: (err) => {
    //     this.toast.emit({ message: 'Failed to load table data', type: 'error' });
    //     this.loading = false;
    //   }
    // });

    // For demo / until API is ready:
    console.log('Fetching data for id:', id);
    // this.loading = false;
  }

  // ============================================
  // COMPUTED GETTERS
  // ============================================

  get dataColumns(): string[] {
    return this.data.length ? Object.keys(this.data[0]) : [];
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.data.length / this.pageSize));
  }

  get paginatedData(): DataRow[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.data.slice(start, start + this.pageSize);
  }

  get paginationStart(): number {
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get paginationEnd(): number {
    return Math.min(this.currentPage * this.pageSize, this.data.length);
  }

  get pageNumbers(): (number | string)[] {
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
    const maxVisible = 5;
    let pages: (number | string)[] = [];

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (currentPage <= 3) {
      pages = [1, 2, 3, 4, '...', totalPages];
    } else if (currentPage >= totalPages - 2) {
      pages = [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    } else {
      pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    }
    return pages;
  }

  get hasSelectedColumns(): boolean {
    return this.structure.some(c => c.selected);
  }

  // ============================================
  // PAGINATION
  // ============================================

  goToPage(page: number | string): void {
    if (page === '...') return;
    const target = page as number;
    if (target >= 1 && target <= this.totalPages && target !== this.currentPage) {
      this.currentPage = target;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  // ============================================
  // STRUCTURE: SELECTION
  // ============================================

  checkAll(checked: boolean): void {
    this.structure.forEach(col => col.selected = checked);
  }

  editSelected(): void {
    const selected = this.structure.filter(c => c.selected);
    if (selected.length === 0) {
      this.toast.emit({ message: 'Please select at least one column', type: 'warning' });
      return;
    }
    this.toast.emit({ message: `Edit ${selected.length} selected column(s) - multi-edit not implemented in demo`, type: 'info' });
  }

  dropSelected(): void {
    const selected = this.structure.filter(c => c.selected);
    if (selected.length === 0) {
      this.toast.emit({ message: 'Please select at least one column', type: 'warning' });
      return;
    }
    if (!confirm(`Are you sure you want to drop ${selected.length} column(s)?`)) return;

    const idsToDrop = selected.map(c => c.id);
    const updated = this.structure.filter(c => !idsToDrop.includes(c.id));
    this.structureChange.emit(updated);
    this.toast.emit({ message: `${selected.length} column(s) dropped successfully`, type: 'success' });
  }

  // ============================================
  // STRUCTURE: EDIT / DROP SINGLE COLUMN
  // ============================================

  openEditModal(col: ColumnStructure): void {
    this.editingColumn = { ...col };
    this.editModalOpen = true;
  }

  closeEditModal(): void {
    this.editModalOpen = false;
    this.editingColumn = null;
  }

  saveEditModal(): void {
    if (!this.editingColumn) return;

    const idx = this.structure.findIndex(c => c.id === this.editingColumn!.id);
    if (idx !== -1) {
      const updated = [...this.structure];
      updated[idx] = { ...this.editingColumn };
      this.structureChange.emit(updated);
      this.toast.emit({ message: `Column "${this.editingColumn.name}" updated successfully`, type: 'success' });
    }
    this.closeEditModal();
  }

  dropColumn(col: ColumnStructure): void {
    if (!confirm(`Are you sure you want to drop column "${col.name}"?`)) return;
    const updated = this.structure.filter(c => c.id !== col.id);
    this.structureChange.emit(updated);
    this.toast.emit({ message: `Column "${col.name}" dropped successfully`, type: 'success' });
  }

  // ============================================
  // DATA VIEW: ROW ACTIONS
  // ============================================

  editRow(row: DataRow): void {
    this.toast.emit({ message: 'Edit row functionality would open an edit form', type: 'info' });
  }

  deleteRow(row: DataRow): void {
    if (!confirm('Are you sure you want to delete this row?')) return;
    const idx = this.data.indexOf(row);
    if (idx !== -1) {
      const updated = [...this.data];
      updated.splice(idx, 1);
      this.dataChange.emit(updated);
      this.toast.emit({ message: 'Row deleted successfully', type: 'success' });
      if (this.paginatedData.length === 1 && this.currentPage > 1) this.currentPage--;
    }
  }

  toggleSelectAllData(checked: boolean, rows: DataRow[]): void {
    rows.forEach(r => r.selected = checked);
  }
}