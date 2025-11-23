import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservation.html',
  styleUrl: './reservation.scss'
})
export class ReservationComponent {
  ts = inject(TranslationService);
  
  formData = {
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2
  };

  submitReservation() {
    alert('Reservation submitted! Thank you, ' + this.formData.name);
    // In a real app, this would send data to a backend
  }
}
