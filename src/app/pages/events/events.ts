import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

interface Event {
  title: string;
  date: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.html',
  styleUrl: './events.scss'
})
export class EventsComponent {
  ts = inject(TranslationService);

  events = computed<Event[]>(() => {
    const t = this.ts.translate();
    return [
      {
        title: t.EVENT_SONGKRAN_TITLE,
        date: t.EVENT_SONGKRAN_DATE,
        description: t.EVENT_SONGKRAN_DESC,
        image: 'https://picsum.photos/seed/songkran/800/600'
      },
      {
        title: t.EVENT_JAZZ_TITLE,
        date: t.EVENT_JAZZ_DATE,
        description: t.EVENT_JAZZ_DESC,
        image: 'https://picsum.photos/seed/jazzwine/800/600'
      },
      {
        title: t.EVENT_LOYKRATHONG_TITLE,
        date: t.EVENT_LOYKRATHONG_DATE,
        description: t.EVENT_LOYKRATHONG_DESC,
        image: 'https://picsum.photos/seed/loykrathong/800/600'
      }
    ];
  });
}
