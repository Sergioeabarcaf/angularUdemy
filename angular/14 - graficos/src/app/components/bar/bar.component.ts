import { Component } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {

  //opciones
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  //leyendas
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];

  //tipo de grafico
  public barChartType:string = 'bar';

  //mostrar leyenda?
  public barChartLegend:boolean = true;

  //Datos
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  //Funcion solo cambia los 3 valores de la primera serie.
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    console.log(clone);
    clone[0].data = data;
    this.barChartData = clone;
  }

}
