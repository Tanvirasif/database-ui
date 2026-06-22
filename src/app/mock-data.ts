import { ColumnStructure, DatabaseInfo, DataRow } from './models';

// ============================================
// DATABASES & TABLES
// ============================================
export const DATABASES: DatabaseInfo[] = [
  {
    name: 'world',
    tables: ['City', 'Country', 'CountryLanguage']
  }
];

// ============================================
// TABLE STRUCTURES (keyed by table name)
// ============================================
export const STRUCTURES: Record<string, ColumnStructure[]> = {
  City: [
    { id: 1, name: 'ID', type: 'int(11)', collation: '---', attributes: 'UNSIGNED', null: 'NO', default: 'None', extra: 'AUTO_INCREMENT', selected: false },
    { id: 2, name: 'Name', type: 'char(35)', collation: 'utf8mb4_general_ci', attributes: '---', null: 'NO', default: 'None', extra: '---', selected: false },
    { id: 3, name: 'CountryCode', type: 'char(3)', collation: 'utf8mb4_general_ci', attributes: '---', null: 'NO', default: "''", extra: '---', selected: false },
    { id: 4, name: 'District', type: 'char(20)', collation: 'utf8mb4_general_ci', attributes: '---', null: 'NO', default: "''", extra: '---', selected: false },
    { id: 5, name: 'Population', type: 'int(11)', collation: '---', attributes: '---', null: 'NO', default: '0', extra: '---', selected: false }
  ],
  Country: [
    { id: 1, name: 'Code', type: 'char(3)', collation: '---', attributes: '---', null: 'NO', default: "''", extra: '---', selected: false },
    { id: 2, name: 'Name', type: 'char(52)', collation: 'utf8mb4_general_ci', attributes: '---', null: 'NO', default: "''", extra: '---', selected: false },
    { id: 3, name: 'Continent', type: "enum('Asia','Europe','North America','Africa','Oceania','Antarctica','South America')", collation: 'utf8mb4_general_ci', attributes: '---', null: 'NO', default: "'Asia'", extra: '---', selected: false },
    { id: 4, name: 'Region', type: 'char(26)', collation: 'utf8mb4_general_ci', attributes: '---', null: 'NO', default: "''", extra: '---', selected: false },
    { id: 5, name: 'SurfaceArea', type: 'float(10,2)', collation: '---', attributes: 'UNSIGNED', null: 'NO', default: '0.00', extra: '---', selected: false },
    { id: 6, name: 'IndepYear', type: 'smallint(6)', collation: '---', attributes: 'UNSIGNED', null: 'YES', default: 'None', extra: '---', selected: false },
    { id: 7, name: 'Population', type: 'int(11)', collation: '---', attributes: '---', null: 'NO', default: '0', extra: '---', selected: false },
    { id: 8, name: 'LifeExpectancy', type: 'float(3,1)', collation: '---', attributes: 'UNSIGNED', null: 'YES', default: 'None', extra: '---', selected: false },
    { id: 9, name: 'GNP', type: 'float(10,2)', collation: '---', attributes: 'UNSIGNED', null: 'YES', default: 'None', extra: '---', selected: false },
    { id: 10, name: 'GNPOld', type: 'float(10,2)', collation: '---', attributes: 'UNSIGNED', null: 'YES', default: 'None', extra: '---', selected: false },
    { id: 11, name: 'LocalName', type: 'char(45)', collation: 'utf8mb4_general_ci', attributes: '---', null: 'NO', default: "''", extra: '---', selected: false },
    { id: 12, name: 'GovernmentForm', type: 'char(45)', collation: 'utf8mb4_general_ci', attributes: '---', null: 'NO', default: "''", extra: '---', selected: false },
    { id: 13, name: 'HeadOfState', type: 'char(60)', collation: 'utf8mb4_general_ci', attributes: '---', null: 'YES', default: 'None', extra: '---', selected: false },
    { id: 14, name: 'Capital', type: 'int(11)', collation: '---', attributes: 'UNSIGNED', null: 'YES', default: 'None', extra: '---', selected: false },
    { id: 15, name: 'Code2', type: 'char(2)', collation: 'utf8mb4_general_ci', attributes: '---', null: 'NO', default: "''", extra: '---', selected: false }
  ],
  CountryLanguage: [
    { id: 1, name: 'CountryCode', type: 'char(3)', collation: 'utf8mb4_general_ci', attributes: '---', null: 'NO', default: "''", extra: '---', selected: false },
    { id: 2, name: 'Language', type: 'char(30)', collation: 'utf8mb4_general_ci', attributes: '---', null: 'NO', default: "''", extra: '---', selected: false },
    { id: 3, name: 'IsOfficial', type: "enum('T','F')", collation: 'utf8mb4_general_ci', attributes: '---', null: 'NO', default: "'F'", extra: '---', selected: false },
    { id: 4, name: 'Percentage', type: 'float(4,1)', collation: '---', attributes: 'UNSIGNED', null: 'NO', default: '0.0', extra: '---', selected: false }
  ]
};

// ============================================
// TABLE DATA ROWS (keyed by table name)
// ============================================
export const TABLE_DATA: Record<string, DataRow[]> = {
  City: [
    { ID: 1, Name: 'Kabul', CountryCode: 'AFG', District: 'Kabol', Population: 1780000 },
    { ID: 2, Name: 'Qandahar', CountryCode: 'AFG', District: 'Qandahar', Population: 237500 },
    { ID: 3, Name: 'Herat', CountryCode: 'AFG', District: 'Herat', Population: 186800 },
    { ID: 4, Name: 'Mazar-e-Sharif', CountryCode: 'AFG', District: 'Balkh', Population: 127800 },
    { ID: 5, Name: 'Amsterdam', CountryCode: 'NLD', District: 'Noord-Holland', Population: 731200 },
    { ID: 6, Name: 'Rotterdam', CountryCode: 'NLD', District: 'Zuid-Holland', Population: 593321 },
    { ID: 7, Name: 'Haag', CountryCode: 'NLD', District: 'Zuid-Holland', Population: 440900 },
    { ID: 8, Name: 'Utrecht', CountryCode: 'NLD', District: 'Utrecht', Population: 234323 },
    { ID: 9, Name: 'Eindhoven', CountryCode: 'NLD', District: 'Noord-Brabant', Population: 201843 },
    { ID: 10, Name: 'Tilburg', CountryCode: 'NLD', District: 'Noord-Brabant', Population: 193238 },
    { ID: 11, Name: 'Groningen', CountryCode: 'NLD', District: 'Groningen', Population: 172701 },
    { ID: 12, Name: 'Breda', CountryCode: 'NLD', District: 'Noord-Brabant', Population: 160398 },
    { ID: 13, Name: 'Nijmegen', CountryCode: 'NLD', District: 'Gelderland', Population: 152463 },
    { ID: 14, Name: 'Enschede', CountryCode: 'NLD', District: 'Overijssel', Population: 149544 },
    { ID: 15, Name: 'Haarlem', CountryCode: 'NLD', District: 'Noord-Holland', Population: 148772 },
    { ID: 16, Name: 'Almere', CountryCode: 'NLD', District: 'Flevoland', Population: 142465 },
    { ID: 17, Name: 'Arnhem', CountryCode: 'NLD', District: 'Gelderland', Population: 138020 },
    { ID: 18, Name: 'Zaanstad', CountryCode: 'NLD', District: 'Noord-Holland', Population: 135621 },
    { ID: 19, Name: '´s-Hertogenbosch', CountryCode: 'NLD', District: 'Noord-Brabant', Population: 129170 },
    { ID: 20, Name: 'Apeldoorn', CountryCode: 'NLD', District: 'Gelderland', Population: 153491 }
  ],
  Country: [],
  CountryLanguage: []
};