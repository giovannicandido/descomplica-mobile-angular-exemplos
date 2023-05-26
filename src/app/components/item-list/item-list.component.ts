import { Component, Directive } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  itemList: string[];
  itemListObservable: Observable<string[]>

  constructor(private itemService: ItemService) {
    this.itemList = this.itemService.getItemList();
    this.itemListObservable = this.itemService.getItemsObservable();
  }

  remove(item: string) {
    const index = this.itemList.indexOf(item)
    this.itemList.splice(index, 1)
  }

  removeObservable(item: string) {
    this.itemService.removeObservable(item);
  }
}


