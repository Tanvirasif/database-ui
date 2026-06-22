export interface ColumnStructure {
  id: number;
  name: string;
  type: string;
  collation: string;
  attributes: string;
  null: 'YES' | 'NO';
  default: string;
  extra: string;
  selected?: boolean;
}

export interface DatabaseInfo {
  name: string;
  tables: string[];
}

export type DataRow = Record<string, any>;