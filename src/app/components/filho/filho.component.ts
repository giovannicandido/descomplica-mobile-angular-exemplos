import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit, OnChanges{
  
  
  @Input()
  start = 0
  @Input()
  end = 10

  @Output()
  numberSelected = new EventEmitter() 

  numeros: number[] = []

  integers: number [] = []

  ngOnChanges(changes: SimpleChanges): void {
    const start = changes['start']?.currentValue
    const end = changes['end']?.currentValue
    console.log('ngOnChanges')
    console.log(start)
    console.log(end)
    if(start) {
      this.start = start
    }

    if(end) {
      this.end = end
    }
    //if(start && end) {
     
      this.createNumeros()
    //}
  }

  ngOnInit(): void {
    this.createNumeros()
  }

  createNumeros() {
    this.numeros = []
    for(let i = this.start;i <= this.end; i++) {
      this.numeros.push(i);
    }
  }

  selecionarNumero(numero: number) {
    this.numberSelected.next(numero)
  }

  reset() {
    this.start = 0
    this.end = 10
    this.createNumeros()
  }
 

}
