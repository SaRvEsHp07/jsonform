import { Component } from '@angular/core';
import { JsonFormsControl } from '@jsonforms/angular';
import { JsonFormsAngularService } from '@jsonforms/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { isControl, RankedTester, rankWith, scopeEndsWith } from '@jsonforms/core';

@Component({
  selector: 'app-country-renderer',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule],
  template: `
    <mat-form-field appearance="fill" class="w-full">
      <mat-label>
        <span class="flex items-center space-x-2">
          <span class="text-xl">🌍</span>
          <span>{{ label }}</span>
        </span>
      </mat-label>
      <mat-select 
        [formControl]="form"
        (selectionChange)="onChange($event)"
        [required]="required"
      >
        <mat-option *ngFor="let country of countries" [value]="country.code">
          <span class="flex items-center space-x-3">
            <span class="text-xl">{{ country.flag }}</span>
            <span>{{ country.name }}</span>
          </span>
        </mat-option>
      </mat-select>
      <mat-error *ngIf="form.errors?.['required'] && form.touched">
        This field is required
      </mat-error>
    </mat-form-field>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .mat-form-field {
      width: 100%;
    }

    ::ng-deep {
      .mat-form-field-flex {
        @apply bg-white/5 backdrop-blur-lg rounded-xl px-4 py-2;
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .mat-form-field-flex:hover {
        @apply bg-white/10;
        border-color: rgba(255, 255, 255, 0.2);
      }

      .mat-form-field.mat-focused .mat-form-field-flex {
        @apply bg-white/15;
        border-color: rgba(255, 255, 255, 0.3);
      }

      .mat-select-value-text {
        @apply text-white;
      }

      .mat-select-arrow {
        @apply text-white/70;
      }

      .mat-form-field-label {
        @apply text-white/70;
      }

      .mat-form-field.mat-focused .mat-form-field-label {
        @apply text-white/90;
      }
    }
  `]
})
export class CountryRendererComponent extends JsonFormsControl {
  countries = [
    { code: 'US', name: 'United States', flag: '🇺🇸' },
    { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'CA', name: 'Canada', flag: '🇨🇦' },
    { code: 'AU', name: 'Australia', flag: '🇦🇺' },
    { code: 'DE', name: 'Germany', flag: '🇩🇪' },
    { code: 'FR', name: 'France', flag: '🇫🇷' },
    { code: 'JP', name: 'Japan', flag: '🇯🇵' },
    { code: 'CN', name: 'China', flag: '🇨🇳' },
    { code: 'IN', name: 'India', flag: '🇮🇳' },
    { code: 'BR', name: 'Brazil', flag: '🇧🇷' }
  ];

  get required(): boolean {
    return this.uischema?.options?.['required'] ?? false;
  }

  constructor(jsonFormsService: JsonFormsAngularService) {
    super(jsonFormsService);
  }

  override onChange(event: any): void {
    this.form.setValue(event.value);
    this.triggerValidation();
  }
}

export const countryControlTester: RankedTester = rankWith(3, scopeEndsWith('country')); 