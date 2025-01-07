import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from '../footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-create-reminder',
  standalone: true,
  imports: [IonicModule,ReactiveFormsModule,FooterComponent,TranslateModule],
  templateUrl: './create-reminder.component.html',
  styleUrl: './create-reminder.component.scss'
})
export class CreateReminderComponent {
  reminderForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.reminderForm = this.fb.group({
      reminderTitle: ['', Validators.required],
      reminderDate: ['', Validators.required],
      reminderTime: ['', Validators.required],
    });
  }
  setReminder(){
    if(this.reminderForm.valid){

    }else{
      this.reminderForm.markAllAsTouched()
    }
  }
}
