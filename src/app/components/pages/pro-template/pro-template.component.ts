import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-pro-template',
  standalone: true,
  imports: [RouterModule,TranslateModule],
  templateUrl: './pro-template.component.html',
  styleUrl: './pro-template.component.scss',
})
export class ProTemplateComponent {
  currentSubscription: string = 'monthly';
  selectSubscription(value:string) {
    this.currentSubscription = value
  }
}
