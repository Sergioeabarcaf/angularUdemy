import { Component } from '@angular/core';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent {

  //leyendas
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  //datos
  public doughnutChartData:number[] = [350, 450, 100];

  //tipo de grafico
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public update(){
    this.doughnutChartData = [
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 )
    ]
  }

}
