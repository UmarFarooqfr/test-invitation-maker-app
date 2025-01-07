import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-background-page',
  standalone: true,
  imports: [FooterComponent, IonicModule, TranslateModule],
  templateUrl: './background-page.component.html',
  styleUrl: './background-page.component.scss',
})
export class BackgroundPageComponent {
  invitationCards: any = [
    {
      title: 'Wedding',
      items: [
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnw78rZxCCnZMcTZTtwfZxoaSbhnd6KTE-A&s',
        },
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnw78rZxCCnZMcTZTtwfZxoaSbhnd6KTE-A&s',
        },
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnw78rZxCCnZMcTZTtwfZxoaSbhnd6KTE-A&s',
        },
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnw78rZxCCnZMcTZTtwfZxoaSbhnd6KTE-A&s',
        },
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnw78rZxCCnZMcTZTtwfZxoaSbhnd6KTE-A&s',
        },
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnw78rZxCCnZMcTZTtwfZxoaSbhnd6KTE-A&s',
        },
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnw78rZxCCnZMcTZTtwfZxoaSbhnd6KTE-A&s',
        },
      ],
    },
    {
      title: 'Birthday',
      items: [
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnw78rZxCCnZMcTZTtwfZxoaSbhnd6KTE-A&s',
        },
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnw78rZxCCnZMcTZTtwfZxoaSbhnd6KTE-A&s',
        },
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnw78rZxCCnZMcTZTtwfZxoaSbhnd6KTE-A&s',
        },
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnw78rZxCCnZMcTZTtwfZxoaSbhnd6KTE-A&s',
        },
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnw78rZxCCnZMcTZTtwfZxoaSbhnd6KTE-A&s',
        },
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnw78rZxCCnZMcTZTtwfZxoaSbhnd6KTE-A&s',
        },
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnw78rZxCCnZMcTZTtwfZxoaSbhnd6KTE-A&s',
        },
      ],
    },
    {
      title: 'Anniversary',
      items: [
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnw78rZxCCnZMcTZTtwfZxoaSbhnd6KTE-A&s',
        },
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnw78rZxCCnZMcTZTtwfZxoaSbhnd6KTE-A&s',
        },
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnw78rZxCCnZMcTZTtwfZxoaSbhnd6KTE-A&s',
        },
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnw78rZxCCnZMcTZTtwfZxoaSbhnd6KTE-A&s',
        },
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnw78rZxCCnZMcTZTtwfZxoaSbhnd6KTE-A&s',
        },
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnw78rZxCCnZMcTZTtwfZxoaSbhnd6KTE-A&s',
        },
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnw78rZxCCnZMcTZTtwfZxoaSbhnd6KTE-A&s',
        },
      ],
    },
  ];
}
