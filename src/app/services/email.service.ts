import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../modal/email.modal';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private http: HttpClient = inject(HttpClient);
  private emailAPI: string = 'send-email';

  public sendEmail(emial: Email): Observable<Email> {
    return this.http.post<any>(
      `https://email-service-681005455667.us-central1.run.app/${this.emailAPI}`,
      emial
    );
  }
}
