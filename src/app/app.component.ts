import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonFormsModule } from '@jsonforms/angular';
import { JsonFormsAngularMaterialModule } from '@jsonforms/angular-material';
import { angularMaterialRenderers } from '@jsonforms/angular-material';
import { userFormSchema, userFormUiSchema } from './features/forms/config/user-form.config';
import { productFormSchema, productFormUiSchema } from './features/forms/config/product-form.config';
import { countryControlTester } from './features/forms/renderers/country-renderer.component';
import { CountryRendererComponent } from './features/forms/renderers/country-renderer.component';
import { animate, style, transition, trigger, query, stagger, keyframes, state } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    JsonFormsModule,
    JsonFormsAngularMaterialModule
  ],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-4 sm:p-6 lg:p-8">
      <!-- Background Decoration -->
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div class="absolute top-0 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div class="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] animate-pulse"></div>
        <div class="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] animate-grid"></div>
      </div>

      <div class="max-w-4xl mx-auto space-y-8 relative">
        <!-- Header -->
        <div class="text-center space-y-4" @headerAnimation>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient">
            Dynamic Form Demo
          </h1>
          <p class="text-slate-300 text-lg animate-fade-in">
            Built with JSON Forms and Tailwind CSS
          </p>
        </div>

        <!-- Form Type Selector -->
        <div class="flex justify-center gap-4" @navAnimation>
          <button
            *ngFor="let type of formTypes"
            (click)="selectFormType(type)"
            class="px-6 py-3 rounded-xl text-lg font-medium transition-all duration-300 relative overflow-hidden group"
            [class.bg-purple-600]="currentFormType === type"
            [class.bg-slate-700]="currentFormType !== type"
            [class.hover:bg-purple-500]="currentFormType !== type"
            [class.hover:bg-purple-500]="currentFormType === type"
            @buttonHover
          >
            <span class="relative z-10">{{ type }} Form</span>
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient"></div>
            <div class="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shine opacity-0 group-hover:opacity-100"></div>
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        <!-- Form Container -->
        <div class="bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-xl border border-white/10 transition-all duration-300 hover:shadow-purple-500/20" @formState>
          <jsonforms
            [schema]="currentSchema"
            [uischema]="currentUiSchema"
            [data]="formData"
            [renderers]="renderers"
            (dataChange)="onFormChange($event)"
            class="form-container"
          ></jsonforms>

          <!-- Submit Button -->
          <div class="mt-8 flex justify-end">
            <button
              (click)="onSubmit()"
              class="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-lg font-medium
                     hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg
                     hover:shadow-purple-500/25 active:scale-95 relative overflow-hidden group"
              @buttonHover
            >
              <span class="relative z-10">Submit</span>
              <div class="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient"></div>
              <div class="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-shine opacity-0 group-hover:opacity-100"></div>
              <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        <!-- Form Data Preview -->
        <div *ngIf="formData" class="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:shadow-purple-500/20" @cardHover>
          <h3 class="text-xl font-medium mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Form Data Preview:</h3>
          <pre class="text-slate-300 overflow-auto bg-slate-800/50 rounded-lg p-4">{{ formData | json }}</pre>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    @keyframes blob {
      0% {
        transform: translate(0px, 0px) scale(1);
      }
      33% {
        transform: translate(30px, -50px) scale(1.1);
      }
      66% {
        transform: translate(-20px, 20px) scale(0.9);
      }
      100% {
        transform: translate(0px, 0px) scale(1);
      }
    }

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    @keyframes shine {
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }

    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0px);
      }
    }

    @keyframes grid {
      0% {
        background-position: 0% 0%;
      }
      100% {
        background-position: 100% 100%;
      }
    }

    .animate-blob {
      animation: blob 7s infinite;
    }

    .animate-gradient {
      background-size: 200% 200%;
      animation: gradient 3s ease infinite;
    }

    .animate-shine {
      animation: shine 2s linear infinite;
    }

    .animate-float {
      animation: float 3s ease-in-out infinite;
    }

    .animate-grid {
      animation: grid 10s linear infinite;
    }

    .animation-delay-2000 {
      animation-delay: 2s;
    }

    .animation-delay-4000 {
      animation-delay: 4s;
    }

    .animate-fade-in {
      animation: fadeIn 1s ease-in;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    ::ng-deep {
      .form-container {
        @apply space-y-6;

        .mat-form-field {
          @apply w-full;
        }

        .mat-form-field-flex {
          @apply bg-white/5 backdrop-blur-lg rounded-xl px-4 py-2 transition-all duration-300;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .mat-form-field-flex:hover {
          @apply bg-white/10;
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-1px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .mat-form-field.mat-focused .mat-form-field-flex {
          @apply bg-white/15;
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 0 0 2px rgba(147, 51, 234, 0.2);
        }

        .mat-form-field-label {
          @apply text-white/70;
          transition: all 0.3s ease;
        }

        .mat-form-field.mat-focused .mat-form-field-label {
          @apply text-purple-400;
          transform: translateY(-1.25em) scale(0.75);
        }

        .mat-input-element {
          @apply text-white;
          caret-color: #a855f7;
        }

        .mat-form-field-underline {
          display: none;
        }

        .mat-error {
          @apply text-pink-400 text-sm mt-1;
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }

        .mat-select {
          @apply text-white;
        }

        .mat-select-value {
          @apply text-white;
        }

        .mat-select-arrow {
          @apply text-white/70;
        }

        .mat-select-panel {
          @apply bg-slate-800 rounded-lg shadow-xl border border-white/10;
          backdrop-filter: blur(12px);
        }

        .mat-option {
          @apply text-white hover:bg-white/10;
          transition: all 0.2s ease;
        }

        .mat-option.mat-selected {
          @apply bg-purple-600/30 text-purple-400;
        }

        .mat-option:hover:not(.mat-option-disabled) {
          @apply bg-white/20;
        }

        .vertical-layout-container {
          @apply grid grid-cols-1 sm:grid-cols-2 gap-6;
        }

        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }
      }
    }
  `],
  animations: [
    trigger('headerAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('800ms cubic-bezier(0.34, 1.56, 0.64, 1)', 
          style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('navAnimation', [
      transition(':enter', [
        query('button', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(200, [
            animate('600ms cubic-bezier(0.34, 1.56, 0.64, 1)', 
              style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ]),
    trigger('buttonHover', [
      transition('* => *', [
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)', 
          keyframes([
            style({ transform: 'scale(1)', offset: 0 }),
            style({ transform: 'scale(1.05)', offset: 0.5 }),
            style({ transform: 'scale(1)', offset: 1 })
          ]))
      ])
    ]),
    trigger('cardHover', [
      transition('* => *', [
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)', 
          keyframes([
            style({ transform: 'scale(1)', offset: 0 }),
            style({ transform: 'scale(1.02)', offset: 0.5 }),
            style({ transform: 'scale(1)', offset: 1 })
          ]))
      ])
    ]),
    trigger('formState', [
      transition('* => *', [
        style({ opacity: 0, transform: 'translateY(20px) scale(0.98)' }),
        animate('600ms cubic-bezier(0.34, 1.56, 0.64, 1)', 
          style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ])
    ])
  ]
})
export class AppComponent {
  formTypes = ['User', 'Product'];
  currentFormType = 'User';
  formData = {};
  renderers = [
    ...angularMaterialRenderers,
    { tester: countryControlTester, renderer: CountryRendererComponent }
  ];

  get currentSchema() {
    return this.currentFormType === 'User' ? userFormSchema : productFormSchema;
  }

  get currentUiSchema() {
    return this.currentFormType === 'User' ? userFormUiSchema : productFormUiSchema;
  }

  selectFormType(type: string) {
    this.currentFormType = type;
    this.formData = {};
  }

  onFormChange(data: any) {
    this.formData = data;
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Here you would typically send the data to a server
    alert('Form submitted successfully!');
  }
} 