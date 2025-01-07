import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from '../footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reminder-page',
  standalone: true,
  imports: [IonicModule, FooterComponent,TranslateModule],
  templateUrl: './reminder-page.component.html',
  styleUrl: './reminder-page.component.scss',
})
export class ReminderPageComponent {
  reminders = [
    {
      title: 'Happy New Year',
      date: '2025-01-01',
      time: '3:30 PM',
      type: 'Personal',
    },
    {
      title: 'Happy Halloween',
      date: '2025-10-31',
      time: '10:00 AM',
      type: 'Work',
    },
    {
      title: 'Christmas ',
      date: '2025-12-25',
      time: '5:00 PM',
      type: 'Work',
    },
  ];
}
