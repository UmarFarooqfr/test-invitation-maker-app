import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FooterComponent, IonicModule, TranslateModule, RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  items: any = [
    {
      id: 1,
      name: 'Wedding',
      description: 'A formal event celebrating the marriage of a couple.',
      date: new Date('2024-06-15T16:00:00'),
      type: 'Marriage',
      image: 'https://example.com/images/wedding.jpg', // Replace with an actual image URL
    },
    {
      id: 2,
      name: 'Bridal Shower',
      description:
        'A celebration for the bride-to-be, typically with gifts and games.',
      date: new Date('2024-06-10T14:00:00'),
      type: 'Pre-marriage',
      image: 'https://example.com/images/bridal-shower.jpg', // Replace with an actual image URL
    },
    {
      id: 3,
      name: 'Birthday',
      description:
        'A celebration of a person’s birthday, typically with cake and gifts.',
      date: new Date('2024-07-20T18:00:00'),
      type: 'Birthday',
      image: 'https://example.com/images/birthday-party.jpg', // Replace with an actual image URL
    },
    {
      id: 4,
      name: 'Baby Shower',
      description:
        'A celebration to welcome a baby, usually with gifts for the newborn.',
      date: new Date('2024-08-12T14:00:00'),
      type: 'Baby Shower',
      image: 'https://example.com/images/baby-shower.jpg', // Replace with an actual image URL
    },
    {
      id: 5,
      name: 'Engagement',
      description:
        'A celebration of a couple’s engagement, often with family and friends.',
      date: new Date('2024-09-05T17:00:00'),
      type: 'Engagement',
      image: 'https://example.com/images/engagement-party.jpg', // Replace with an actual image URL
    },
    {
      id: 6,
      name: 'Anniversary',
      description: 'A celebration of a couple’s wedding anniversary.',
      date: new Date('2024-10-22T19:00:00'),
      type: 'Anniversary',
      image: 'https://example.com/images/anniversary-party.jpg', // Replace with an actual image URL
    },
    {
      id: 7,
      name: 'Sports',
      description: 'A celebration marking the completion of a course of study.',
      date: new Date('2024-05-25T16:00:00'),
      type: 'Graduation',
      image: 'https://example.com/images/graduation-party.jpg', // Replace with an actual image URL
    },
  ];
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
  constructor(private router: Router) {}
  selectedTempaltes(value: string) {
    this.router.navigate(['/app/selected-template'], {
      queryParams: {
        templateType: value,
      },
    });
  }
}
