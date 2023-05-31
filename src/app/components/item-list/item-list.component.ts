import { Component, Directive } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  itemList: string[] = [];
  
  itemObservable: Observable<string[]>

  constructor(private itemService: ItemService) {
    this.itemList = itemService.getItemList()
    this.itemObservable = itemService.getItemsObservable()
  }

  remove(item: string) {
    const index = this.itemList.indexOf(item)
    this.itemList.splice(index, 1)
  }

  removeObservable(item: string) {
    this.itemService.removeObservable(item);
  }
}


