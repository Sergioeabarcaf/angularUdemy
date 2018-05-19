import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <h2>ngStyle <small>component</small></h2>
  <app-ng-style></app-ng-style>
  <hr>
  <h2>CSS <small>component</small></h2>
  <app-css></app-css>
  <p>test de app.component</p>
  <hr>
  <h2>Clases <small>component</small></h2>
  <app-clases></app-clases>
  <hr>
  <h2>Directivas <small>angular</small></h2>
  <p [appResaltado]="'orange'">
    Hola mundo
  </p>
  <hr>
  <h2>ngSwitch <small>component</small></h2>
  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnChanges() {
    console.log("OnChanges");
  }

  ngDoCheck() {
    console.log("DoCheck");
  }

  ngAfterContentInit() {
    console.log("AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("OnDestroy");
  }

}
