export class Marcador {
  public lat:number;
  public lon:number;
  public titulo:string = "Sin titulo";
  public descripcion = "Sin descripción";


  constructor (lat:number, lon:number){
    this.lat = lat;
    this.lon = lon;
  }
}
