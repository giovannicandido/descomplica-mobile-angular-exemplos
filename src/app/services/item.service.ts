import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemList: string[] = [];
  private itemListObservableSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([])

  getItemsObservable(): Observable<string[]> {
    return this.itemListObservableSubject.asObservable();
  }

  addItemObservable(item: string) {
    let current = this.itemListObservableSubject.getValue()
    const newItems = [...current, item ]
    this.itemListObservableSubject.next(newItems)
  }

  removeObservable(item: string) {
    let current = this.itemListObservableSubject.getValue()
    const index = current.indexOf(item)
    current.splice(index, 1)
    this.itemListObservableSubject.next(current)
  }

  addItem(item: string) {
    this.itemList.push(item);
  }

  getItemList(): string[] {
    return this.itemList;
  }


}
