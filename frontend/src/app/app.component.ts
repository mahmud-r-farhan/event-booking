import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule // ✅ this is key
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  formData: any = {};

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  onSubmit() {
    if (!this.formData.name || !this.formData.email) {
      this.snackBar.open('Name and Email are required.', 'Close', {
        duration: 3000
      });
      return;
    }

    this.http.post('http://localhost:5000/api/events/register', this.formData).subscribe({
      next: () => {
        this.snackBar.open('Successfully registered!', 'Close', {
          duration: 3000
        });
        this.formData = {};
      },
      error: () => {
        this.snackBar.open('Error during submission.', 'Retry', {
          duration: 3000
        });
      }
    });
  }
}
