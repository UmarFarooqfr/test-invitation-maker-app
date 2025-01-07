import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { AlertController, IonicModule, MenuController } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-setting-page',
  standalone: true,
  imports: [FooterComponent, IonicModule, TranslateModule , RouterModule],
  templateUrl: './setting-page.component.html',
  styleUrl: './setting-page.component.scss',
})
export class SettingPageComponent {
  currentLanguage: string = '';
  constructor(private translateService: TranslateService) {
    this.currentLanguage = this.translateService.store.langs[0];
  }
  switchLanguage(language: string) {
    this.translateService.use(language);
    this.currentLanguage = language;
  }
}
