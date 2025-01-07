import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mycard-page',
  standalone: true,
  imports: [FooterComponent, IonicModule ,TranslateModule],
  templateUrl: './mycard-page.component.html',
  styleUrl: './mycard-page.component.scss',
})
export class MycardPageComponent {
  selectedTag: string = 'Draft';
}
