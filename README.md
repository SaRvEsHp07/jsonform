# JSON Forms Angular Demo

This project demonstrates the implementation of JSON Forms in Angular, featuring custom renderers and Material Design components.

## Features

### Country Renderer Component

The project includes a custom country selector renderer (`CountryRendererComponent`) that provides an enhanced user experience for selecting countries. Here are its key features:

1. **Visual Design**
   - Material Design form field with a modern, clean appearance
   - Country flags (emojis) displayed alongside country names
   - Responsive width that takes up 100% of its container
   - Custom styling with semi-transparent backgrounds and hover effects

2. **Technical Implementation**
   - Standalone Angular component
   - Extends `JsonFormsControl` from `@jsonforms/angular`
   - Integrates with Material Design components (`mat-form-field`, `mat-select`)
   - Supports form validation and required field handling

3. **Component Structure**
   ```typescript
   @Component({
     selector: 'app-country-renderer',
     standalone: true,
     imports: [CommonModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule]
   })
   ```

4. **Country Data**
   - Predefined list of 10 countries
   - Each country entry includes:
     - Country code (e.g., 'US')
     - Country name (e.g., 'United States')
     - Flag emoji (e.g., '🇺🇸')

5. **Styling Features**
   - Backdrop blur effects
   - Semi-transparent backgrounds
   - Hover and focus states
   - Custom Material Design theming
   - Responsive layout

## Technical Details

### Required Field Handling
```typescript
get required(): boolean {
  return this.uischema?.options?.['required'] ?? false;
}
```
- Uses optional chaining for safe property access
- Implements bracket notation for TypeScript index signature compatibility
- Falls back to `false` if the required option is not specified

### Event Handling
```typescript
override onChange(event: any): void {
  this.form.setValue(event.value);
  this.triggerValidation();
}
```
- Handles selection changes
- Updates form value
- Triggers validation

### Tester Configuration
```typescript
export const countryControlTester: RankedTester = rankWith(3, scopeEndsWith('country'));
```
- Ranks the renderer with priority 3
- Matches schema elements ending with 'country'

## Usage

To use the country renderer in your JSON Forms schema:

```json
{
  "type": "object",
  "properties": {
    "country": {
      "type": "string",
      "title": "Country"
    }
  }
}
```

UI Schema:
```json
{
  "type": "Control",
  "scope": "#/properties/country",
  "options": {
    "required": true
  }
}
```

## Dependencies

- Angular Material
- JSON Forms Angular
- TailwindCSS (for utility classes)

## Installation

1. Install dependencies:
   ```bash
   npm install @jsonforms/angular @angular/material
   ```

2. Import the renderer in your module:
   ```typescript
   import { CountryRendererComponent, countryControlTester } from './features/forms/renderers/country-renderer.component';
   ```

3. Register the renderer:
   ```typescript
   renderers: [
     { tester: countryControlTester, renderer: CountryRendererComponent }
   ]
   ```

## Styling

The component uses a combination of Material Design and custom styles:
- Semi-transparent backgrounds with backdrop blur
- Smooth hover and focus transitions
- Custom form field styling
- Responsive design

## Best Practices

1. **Type Safety**
   - Use of optional chaining
   - Proper TypeScript index signatures
   - Strong typing for component properties

2. **Performance**
   - Standalone component for tree-shakability
   - Efficient change detection
   - Optimized rendering

3. **Accessibility**
   - Material Design components for built-in accessibility
   - Proper ARIA labels
   - Keyboard navigation support

## Contributing

Feel free to contribute to this project by:
1. Forking the repository
2. Creating a feature branch
3. Submitting a pull request

## License

This project is open-source and available under the MIT license.
