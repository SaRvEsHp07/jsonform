import { Component, Input } from '@angular/core';
import { JsonFormsModule } from '@jsonforms/angular';
import { JsonFormsAngularService } from '@jsonforms/angular';
import { JsonFormsState } from '@jsonforms/core';

@Component({
  selector: 'app-json-form',
  standalone: true,
  imports: [JsonFormsModule],
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss']
})
export class JsonFormComponent {
  @Input() schema: any;
  @Input() uischema: any;
  @Input() data: any = {};

  constructor(private jsonFormsService: JsonFormsAngularService) {}

  ngOnInit() {
    this.jsonFormsService.init({
      data: this.data,
      schema: this.schema,
      uischema: this.uischema
    });
  }
} 