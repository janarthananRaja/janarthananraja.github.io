import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import emailjs from '@emailjs/browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resume-modal',
  templateUrl: './resume-modal.component.html',
  styleUrls: ['./resume-modal.component.css']
})
export class ResumeModalComponent {
  email: string = '';
  isLoading: boolean = false;
  statusMessage: string = '';
  statusType: 'success' | 'error' = 'success';

  constructor(public dialogRef: MatDialogRef<ResumeModalComponent>, private http: HttpClient) { }

  // sendResume() {
  //   if (!this.email) return;

  //   this.isLoading = true;
  //   this.statusMessage = '';
  //   alert(this.email);
  //   const sendResumeUrl = 'https://mailer-0lpe.onrender.com/api/send-resume';
  //   const payload = { email: this.email };

  //   this.http.post(sendResumeUrl, payload).subscribe({
  //     next: (response) => {
  //       this.statusType = 'success';
  //       this.statusMessage = 'Enable to sent resume to your mail !!';
  //       this.isLoading = false;
  //       setTimeout(() => this.dialogRef.close(), 3000);
  //     },
  //     error: (error) => {
  //       console.error('Error sending resume:', error);
  //       this.statusType = 'error';
  //       this.statusMessage = 'Failed to send resume. Please try again.';
  //       this.isLoading = false;
  //     }
  //   });
  // }
  sendResume() {
    if (!this.email) return;

    this.isLoading = true;
    this.statusMessage = '';

    const sendResumeUrl = 'https://mailer-0lpe.onrender.com/api/send-resume';
    const payload = { email: this.email };

    this.http.post(sendResumeUrl, payload, { responseType: 'text' }).subscribe({
      next: (res) => {
        this.statusType = 'success';
        this.statusMessage = res || 'Resume launched into your mailbox!';
        this.isLoading = false;
        setTimeout(() => this.dialogRef.close(), 3000);
      },
      error: (err) => {
        this.statusType = 'error';

        // If status is 0, it means the call died before reaching backend or was terminated
        if (err.status === 0) {
          this.statusMessage = 'Network failure: the server never received the request.';
        } else {
          // Use actual backend error text if available
          this.statusMessage = err.error?.text || err.error?.message || 'Failed to send resume.';
        }

        this.isLoading = false;
        console.error('Error sending resume:', err);
      }
    });
  }

}
