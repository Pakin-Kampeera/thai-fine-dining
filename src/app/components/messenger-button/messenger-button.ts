import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messenger-button',
  imports: [CommonModule],
  templateUrl: './messenger-button.html',
  styleUrl: './messenger-button.scss'
})
export class MessengerButtonComponent {
  // Replace with your Facebook Page ID
  facebookPageId = 'YOUR_FACEBOOK_PAGE_ID';

  openMessenger() {
    // Open Facebook Messenger in a new window
    const messengerUrl = `https://m.me/${this.facebookPageId}`;
    window.open(messengerUrl, '_blank', 'width=400,height=600');
  }
}
