import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-selected-templates',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './selected-templates.component.html',
  styleUrl: './selected-templates.component.scss',
})
export class SelectedTemplatesComponent implements OnInit {
  selectedType: string = '';
  templates: any = [
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
    {
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnw78rZxCCnZMcTZTtwfZxoaSbhnd6KTE-A&s',
    },
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      if (params) {
        this.selectedType = params['templateType'];
        console.log(' this.selectedType: ', this.selectedType);
      }
    });
  }
}
