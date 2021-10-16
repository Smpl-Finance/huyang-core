import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {HuyangHeaderSearchParamModel} from '../../../models/huyang-header/huyang-header-search-param.model';
import {HeaderSearch} from '../../../services/huyang-header/header-search';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'header-center',
  templateUrl: './huyang-header-center.component.html',
  styleUrls: ['./huyang-header-center.component.scss']
})
export class HuyangHeaderCenterComponent implements OnInit {
  @Input() searchOptions: HuyangHeaderSearchParamModel[] = [
    {
      value: 'sample',
      label: 'Sample'
    }
  ];
  @Output() search: EventEmitter<HeaderSearch> = new EventEmitter<HeaderSearch>();
  formGroup: FormGroup;
  searchIcon = faSearch;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (this.searchOptions) {
      this.formGroup = this.fb.group({
        query: ['', Validators.required],
        option: [this.searchOptions[0].value ? this.searchOptions[0].value : '']
      });
    } else {
      this.formGroup = this.fb.group({
        query: ['', Validators.required],
        option: ['']
      });
    }
  }

  submit(): void {
    this.search.emit({
      query: this.formGroup.controls.query.value,
      option: this.searchOptions.filter(
        opts => opts.value === this.formGroup.controls.option.value
      )[0]
    } as HeaderSearch);
  }
}
