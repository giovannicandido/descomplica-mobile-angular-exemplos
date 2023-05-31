import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemList: string[] = [];
  
  private itemObservableSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([])

  getItemsObservable(): Observable<string[]> {
    //return this.itemListObservableSubject.asObservable();
    return this.itemObservableSubject.asObservable()
  }

  addItemObservable(item: string) {
    const value = this.itemObservableSubject.getValue();
    value.push(item)
    this.itemObservableSubject.next(value);
  }

  removeObservable(item: string) {
    const value = this.itemObservableSubject.getValue();
    const index = value.indexOf(item);
    value.splice(index, 1)
    this.itemObservableSubject.next(value);
  }

  addItem(item: string) {
    this.itemList.push(item);
  }

  getItemList(): string[] {
    return this.itemList;
  }


}
