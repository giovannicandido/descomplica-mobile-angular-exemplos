import { Component, ViewChild } from '@angular/core';
import { FilhoComponent } from '../filho/filho.component';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent {
  start = 0
  end = 10

  @ViewChild("filho")
  filho!: FilhoComponent

  selecionado: number | null = null

  incrementarStart() {
    this.start++
  }

  incrementarEnd() {
    this.end++
  }

  reset() {
    this.filho.reset()
  }
}
