import { Component, inject, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, MatProgressSpinnerModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.less',
})
export class ContactComponent implements OnInit {
  formBuilder = inject(FormBuilder);

  contactFormGroup: FormGroup;
  private emailService: EmailService = inject(EmailService);

  ngOnInit(): void {
    this.contactFormGroup = this.formBuilder.nonNullable.group({
      name: new FormControl<string>(''),
      email: new FormControl<string>(''),
      website: new FormControl<string>(''),
      message: new FormControl<string>(''),
    });
  }

  onSubmit(): void {
    this.emailService.sendEmail(this.contactFormGroup.value).subscribe(() => {
      alert('Email sent successfully');
    }, (error) => {
        console.error('Error sending email', error);
    });
  }
}
