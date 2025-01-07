import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-template-search',
  standalone: true,
  imports: [FooterComponent, RouterModule, IonicModule, FormsModule,TranslateModule],
  templateUrl: './template-search.component.html',
  styleUrl: './template-search.component.scss',
})
export class TemplateSearchComponent {
  searchQuery: string = '';
  items: string[] = [
    'Wedding',
    'Bridal Shower',
    'Birthday',
    'Baby Shower',
    'Engagement',
    'Anniversary',
    'Sports',
    'Retirement & Farewell',
  ];
  filteredItems: string[] = this.items;
  isDropdownOpen: boolean = false;
  selectedItem: string = '';
  searchedTemplates: any = [
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
  constructor(private sanitizer: DomSanitizer) {}
  /**
   * Filters the items based on the search query.
   * @param event - The event triggered by the search input.
   */
  onSearch(event: any) {
    const query = this.searchQuery.toLowerCase();
    this.filteredItems = this.items.filter((item) =>
      item.toLowerCase().includes(query)
    );
  }

  /**
   * Selects an item from the filtered list and sets it as the search query.
   * @param item - The item selected from the filtered list.
   */
  selectItem(item: string) {
    this.searchQuery = item;
    this.selectedItem = item;
    this.filteredItems = [];
  }

  /**
   * Highlights the matching part of the item text based on the search query.
   * @param item - The item whose text needs to be highlighted.
   * @returns - The item text with highlighted matching parts wrapped in a span.
   */
  highlightMatch(item: string): string {
    if (!this.searchQuery) return item;
    const regex = new RegExp(`(${this.searchQuery})`, 'gi');
    const highlightedText = item.replace(
      regex,
      `<span style="color: var(--btn-color);">$1</span>`
    );
    return this.sanitizer.bypassSecurityTrustHtml(highlightedText) as string;
  }
  /**
   * Toggles the visibility of the dropdown list.
   * @param isOpen - A boolean value indicating whether the dropdown should be opened (true) or closed (false).
   */
  toggleDropdown(isOpen: boolean): void {
    setTimeout(() => {
      this.isDropdownOpen = isOpen;
      if (isOpen === false && !this.searchQuery) {
        this.selectedItem = '';
      }
    }, 100);
  }
}
