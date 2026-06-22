import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  // Raw API data — each item has database_name, table_name, etc.
  @Input() databaseData: any[] = [];
  @Input() currentDatabase = '';
  @Input() currentTable = '';
  @Input() currentTableId: number | null = null;  // table_id
  @Input() open = false;

  @Output() tableSelect = new EventEmitter<{ database: string; table: string, id: number  }>();
  @Output() closeSidebar = new EventEmitter<void>();
  @Output() toggleSidebar = new EventEmitter<void>();

  expandedDatabases: Set<string> = new Set();

  ngOnInit(): void {
    if (this.currentDatabase) {
      this.expandedDatabases.add(this.currentDatabase);
    }
  }

  ngOnChanges(): void {
    if (this.currentDatabase) {
      this.expandedDatabases.add(this.currentDatabase);
    }
  }

  /** Get unique database names in order of first appearance */
  get databases(): string[] {
    const seen = new Set<string>();
    const result: string[] = [];
    for (const item of this.databaseData) {
      const dbName = item.database_name;
      if (dbName && !seen.has(dbName)) {
        seen.add(dbName);
        result.push(dbName);
      }
    }
    return result;
  }

  /** Get tables for a specific database */
  getTables(dbName: string): any[] {
    return this.databaseData.filter(item => item.database_name === dbName);
  }

  toggleDatabase(dbName: string): void {
    if (this.expandedDatabases.has(dbName)) {
      this.expandedDatabases.delete(dbName);
    } else {
      this.expandedDatabases.add(dbName);
    }
  }

  isExpanded(dbName: string): boolean {
    return this.expandedDatabases.has(dbName);
  }

  selectTable(database: string, tableName: string, id: number): void {
    this.tableSelect.emit({ database, table: tableName, id });
  }

  onClose(): void {
    this.closeSidebar.emit();
  }

  onToggle(): void {
    this.toggleSidebar.emit();
  }
}