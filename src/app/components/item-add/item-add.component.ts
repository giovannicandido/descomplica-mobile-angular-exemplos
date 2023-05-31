import { Component } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-add',
  template: `
    <input type="text" [(ngModel)]="newItem">
    <button (click)="addItem()">Adicionar</button>
    <button (click)="addItemObservable()">Adicionar Observable</button>
  `,
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent {
  newItem: string = '';

  constructor(private itemService: ItemService) {}

  addItem() {
    this.itemService.addItem(this.newItem);
    this.newItem = '';
  }

  addItemObservable() {
    this.itemService.addItemObservable(this.newItem)
    this.newItem = '';
  }
}
