import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, MatProgressSpinnerModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.less',
})
export class ContactComponent implements OnInit {
  formBuilder = inject(FormBuilder);

  contactFormGroup: FormGroup;
  emailIsSending: boolean = false;
  emailIsSent: boolean = false;
  private emailService: EmailService = inject(EmailService);

  ngOnInit(): void {
    this.contactFormGroup = this.formBuilder.nonNullable.group({
      name: new FormControl<string>('', Validators.required),
      email: new FormControl<string>('', [
        Validators.required,
        Validators.email,
      ]),
      website: new FormControl<string>(''),
      message: new FormControl<string>('', Validators.required),
    });
  }

  onSubmit(): void {
    this.emailIsSending = true;
    this.emailService.sendEmail(this.contactFormGroup.value).subscribe(() => {
      this.emailIsSending = false;
      this.emailIsSent = true;
      this.contactFormGroup.reset();
    });
  }
}
