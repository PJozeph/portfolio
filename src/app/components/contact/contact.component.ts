import { Component, inject, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.less',
})
export class ContactComponent implements OnInit {
  formBuilder = inject(FormBuilder);
  contactFormGroup: FormGroup;

  ngOnInit(): void {
    this.contactFormGroup = this.formBuilder.nonNullable.group({
      name: new FormControl<string>(''),
      email: new FormControl<string>(''),
      website: new FormControl<string>(''),
      message: new FormControl<string>(''),
    });

    this.contactFormGroup.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
