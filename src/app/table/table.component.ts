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
  // @Input() structure: ColumnStructure[] = [];
  @Input() data: DataRow[] = [];

  @Output() toast = new EventEmitter<{ message: string; type: 'success' | 'error' | 'warning' | 'info' }>();
  @Output() structureChange = new EventEmitter<ColumnStructure[]>();
  @Output() dataChange = new EventEmitter<DataRow[]>();

  currentPage = 1;
  pageSize = 10;

  editModalOpen = false;
  editingColumn: ColumnStructure | null = null;

  structure: any =
    [
      {
        "id": 3419,
        "source_id": 175,
        "column_name": "id",
        "data_type": "int",
        "is_nullable": 1,
        "max_length": 10,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3420,
        "source_id": 175,
        "column_name": "email",
        "data_type": "varchar",
        "is_nullable": 0,
        "max_length": 99,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3421,
        "source_id": 175,
        "column_name": "first_name",
        "data_type": "varchar",
        "is_nullable": 0,
        "max_length": 250,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3422,
        "source_id": 175,
        "column_name": "last_name",
        "data_type": "varchar",
        "is_nullable": 0,
        "max_length": 250,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3423,
        "source_id": 175,
        "column_name": "father_name",
        "data_type": "varchar",
        "is_nullable": 1,
        "max_length": 255,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3424,
        "source_id": 175,
        "column_name": "mather_name",
        "data_type": "varchar",
        "is_nullable": 1,
        "max_length": 255,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3425,
        "source_id": 175,
        "column_name": "phone",
        "data_type": "varchar",
        "is_nullable": 1,
        "max_length": 99,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3426,
        "source_id": 175,
        "column_name": "idd_code_id",
        "data_type": "int",
        "is_nullable": 1,
        "max_length": 10,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3427,
        "source_id": 175,
        "column_name": "address",
        "data_type": "text",
        "is_nullable": 1,
        "max_length": 65535,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3428,
        "source_id": 175,
        "column_name": "state",
        "data_type": "varchar",
        "is_nullable": 1,
        "max_length": 255,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3429,
        "source_id": 175,
        "column_name": "city",
        "data_type": "varchar",
        "is_nullable": 1,
        "max_length": 255,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3430,
        "source_id": 175,
        "column_name": "post_code",
        "data_type": "varchar",
        "is_nullable": 1,
        "max_length": 255,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3431,
        "source_id": 175,
        "column_name": "photo_id",
        "data_type": "bigint",
        "is_nullable": 1,
        "max_length": 19,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3432,
        "source_id": 175,
        "column_name": "cover_image_id",
        "data_type": "bigint",
        "is_nullable": 1,
        "max_length": 19,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3433,
        "source_id": 175,
        "column_name": "partner_account_id",
        "data_type": "bigint",
        "is_nullable": 1,
        "max_length": 19,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3434,
        "source_id": 175,
        "column_name": "nid_number",
        "data_type": "varchar",
        "is_nullable": 1,
        "max_length": 255,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3435,
        "source_id": 175,
        "column_name": "about",
        "data_type": "text",
        "is_nullable": 1,
        "max_length": 65535,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3436,
        "source_id": 175,
        "column_name": "password",
        "data_type": "varchar",
        "is_nullable": 0,
        "max_length": 255,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3437,
        "source_id": 175,
        "column_name": "time_zone_id",
        "data_type": "int",
        "is_nullable": 0,
        "max_length": 10,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3438,
        "source_id": 175,
        "column_name": "short_date_id",
        "data_type": "int",
        "is_nullable": 0,
        "max_length": 10,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3439,
        "source_id": 175,
        "column_name": "medium_date_id",
        "data_type": "int",
        "is_nullable": 0,
        "max_length": 10,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3440,
        "source_id": 175,
        "column_name": "long_date_id",
        "data_type": "int",
        "is_nullable": 0,
        "max_length": 10,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3441,
        "source_id": 175,
        "column_name": "full_date_id",
        "data_type": "int",
        "is_nullable": 0,
        "max_length": 10,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3442,
        "source_id": 175,
        "column_name": "short_time_id",
        "data_type": "int",
        "is_nullable": 0,
        "max_length": 10,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3443,
        "source_id": 175,
        "column_name": "medium_time_id",
        "data_type": "int",
        "is_nullable": 0,
        "max_length": 10,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3444,
        "source_id": 175,
        "column_name": "long_time_id",
        "data_type": "int",
        "is_nullable": 0,
        "max_length": 10,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3445,
        "source_id": 175,
        "column_name": "full_time_id",
        "data_type": "int",
        "is_nullable": 0,
        "max_length": 10,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3446,
        "source_id": 175,
        "column_name": "short_date_time_id",
        "data_type": "int",
        "is_nullable": 0,
        "max_length": 10,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3447,
        "source_id": 175,
        "column_name": "medium_date_time_id",
        "data_type": "int",
        "is_nullable": 0,
        "max_length": 10,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3448,
        "source_id": 175,
        "column_name": "long_date_time_id",
        "data_type": "int",
        "is_nullable": 0,
        "max_length": 10,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3449,
        "source_id": 175,
        "column_name": "full_date_time_id",
        "data_type": "int",
        "is_nullable": 0,
        "max_length": 10,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3450,
        "source_id": 175,
        "column_name": "referral_id",
        "data_type": "int",
        "is_nullable": 1,
        "max_length": 10,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3451,
        "source_id": 175,
        "column_name": "varification_code",
        "data_type": "varchar",
        "is_nullable": 1,
        "max_length": 22,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3452,
        "source_id": 175,
        "column_name": "birthday",
        "data_type": "varchar",
        "is_nullable": 0,
        "max_length": 255,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3453,
        "source_id": 175,
        "column_name": "gander_id",
        "data_type": "int",
        "is_nullable": 0,
        "max_length": 10,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3454,
        "source_id": 175,
        "column_name": "signature",
        "data_type": "int",
        "is_nullable": 0,
        "max_length": 10,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3455,
        "source_id": 175,
        "column_name": "google_user_id",
        "data_type": "varchar",
        "is_nullable": 1,
        "max_length": 255,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3456,
        "source_id": 175,
        "column_name": "reseller_id",
        "data_type": "bigint",
        "is_nullable": 1,
        "max_length": 19,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3457,
        "source_id": 175,
        "column_name": "sign_up_type",
        "data_type": "int",
        "is_nullable": 0,
        "max_length": 10,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3458,
        "source_id": 175,
        "column_name": "payment_date",
        "data_type": "timestamp",
        "is_nullable": 1,
        "max_length": null,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      },
      {
        "id": 3459,
        "source_id": 175,
        "column_name": "payment_required",
        "data_type": "int",
        "is_nullable": 1,
        "max_length": 10,
        "created_at": "2026-05-19 04:55:03",
        "updated_at": "2026-05-19 04:55:03"
      }
    ]

  columns: any = [
    {
      "id": 3047,
      "source_id": 175,
      "column_name": "id",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-19 04:55:12",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3048,
      "source_id": 175,
      "column_name": "email",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3049,
      "source_id": 175,
      "column_name": "first_name",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3050,
      "source_id": 175,
      "column_name": "last_name",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3051,
      "source_id": 175,
      "column_name": "father_name",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3052,
      "source_id": 175,
      "column_name": "mather_name",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3053,
      "source_id": 175,
      "column_name": "phone",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3054,
      "source_id": 175,
      "column_name": "idd_code_id",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3055,
      "source_id": 175,
      "column_name": "address",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3056,
      "source_id": 175,
      "column_name": "state",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3057,
      "source_id": 175,
      "column_name": "city",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3058,
      "source_id": 175,
      "column_name": "post_code",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3059,
      "source_id": 175,
      "column_name": "photo_id",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3060,
      "source_id": 175,
      "column_name": "cover_image_id",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3061,
      "source_id": 175,
      "column_name": "partner_account_id",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3062,
      "source_id": 175,
      "column_name": "nid_number",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3063,
      "source_id": 175,
      "column_name": "about",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3064,
      "source_id": 175,
      "column_name": "password",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3065,
      "source_id": 175,
      "column_name": "time_zone_id",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3066,
      "source_id": 175,
      "column_name": "short_date_id",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3067,
      "source_id": 175,
      "column_name": "medium_date_id",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3068,
      "source_id": 175,
      "column_name": "long_date_id",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3069,
      "source_id": 175,
      "column_name": "full_date_id",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3070,
      "source_id": 175,
      "column_name": "short_time_id",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3071,
      "source_id": 175,
      "column_name": "medium_time_id",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3072,
      "source_id": 175,
      "column_name": "long_time_id",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3073,
      "source_id": 175,
      "column_name": "full_time_id",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3074,
      "source_id": 175,
      "column_name": "short_date_time_id",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3075,
      "source_id": 175,
      "column_name": "medium_date_time_id",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3076,
      "source_id": 175,
      "column_name": "long_date_time_id",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3077,
      "source_id": 175,
      "column_name": "full_date_time_id",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3078,
      "source_id": 175,
      "column_name": "referral_id",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3079,
      "source_id": 175,
      "column_name": "varification_code",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3080,
      "source_id": 175,
      "column_name": "birthday",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3081,
      "source_id": 175,
      "column_name": "gander_id",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3082,
      "source_id": 175,
      "column_name": "signature",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 1,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3083,
      "source_id": 175,
      "column_name": "google_user_id",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3084,
      "source_id": 175,
      "column_name": "reseller_id",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    },
    {
      "id": 3085,
      "source_id": 175,
      "column_name": "sign_up_type",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 1,
      "is_sortable": 1,
      "is_groupable": 1,
      "status": 1
    },
    {
      "id": 3086,
      "source_id": 175,
      "column_name": "payment_date",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 0,
      "is_sortable": 1,
      "is_groupable": 1,
      "status": 1
    },
    {
      "id": 3087,
      "source_id": 175,
      "column_name": "payment_required",
      "is_selectable": 1,
      "is_filterable": 1,
      "created_at": "2026-05-18 12:16:05",
      "updated_at": "2026-05-18 12:16:05",
      "is_aggregatable": 1,
      "is_sortable": 1,
      "is_groupable": 0,
      "status": 1
    }
  ]

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