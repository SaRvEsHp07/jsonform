import { Component, OnInit } from '@angular/core';
import { JsonFormsControl } from '@jsonforms/angular';
import { JsonFormsAngularService } from '@jsonforms/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-country-renderer',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule],
  template: `
    <mat-form-field appearance="fill">
      <mat-label>Country</mat-label>
      <mat-select [formControl]="form" (selectionChange)="onChange($event)">
        <mat-option value="US">United States</mat-option>
        <mat-option value="CA">Canada</mat-option>
        <mat-option value="UK">United Kingdom</mat-option>
      </mat-select>
    </mat-form-field>
  `
})
export class CustomCountryRendererComponent extends JsonFormsControl implements OnInit {
  constructor(service: JsonFormsAngularService) {
    super(service);
  }

  override ngOnInit() {
    super.ngOnInit();
  }

  override onChange(event: any) {
    this.onChange(event.value);
  }
} 