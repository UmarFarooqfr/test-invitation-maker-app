import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ratio-page',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './ratio-page.component.html',
  styleUrl: './ratio-page.component.scss',
})
export class RatioPageComponent {
  ratioOptions: any = [
    {
      title: 'Posters',
      icon: 'bi bi-envelope-paper-heart-fill',
      ratio: '1500 x 2100',
      height: '180px',
    },
    {
      title: 'Instagram post',
      icon: 'bi bi-instagram',
      ratio: '1080 x 1080',
      height: '200px',
    },
    {
      title: 'Youtube thumbnail',
      icon: 'bi bi-youtube',
      ratio: '1280 x 720',
      height: '200px',
    },
    {
      title: 'Facebook story',
      icon: 'bi bi-facebook',
      ratio: '1080 x 1920',
      height: '140px',
    },
    {
      title: 'Instagram story',
      icon: 'bi bi-instagram',
      ratio: '1080 x 1920',
      height: '100px',
    },
   
    {
      title: 'Facebook cover',
      icon: 'bi bi-facebook',
      ratio: '1280 x 720',
      height: '150px',
    },
    {
      title: 'Invitation card',
      icon: 'bi bi-envelope-paper-heart-fill',
      ratio: '1080 x 720',
      height: '120px',
    },
    {
      title: 'Youtube banner',
      icon: 'bi bi-youtube',
      ratio: '2560 x 1140',
      height: '200px',
    },
    {
      title: 'Facebook post',
      icon: 'bi bi-facebook',
      ratio: '1080 x 1080',
      height: '180px',
    },

  ];
}
