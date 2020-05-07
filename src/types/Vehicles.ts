export class Vehicle {
  ID: number;
  Make: string;
  Model: string;
  Version: string;
  Image: string;
  KM: number;
  Price: string;
  YearModel: number;
  YearFab: number;
  Color: string;

  constructor(props: any = {}) {
    Object.assign(this, props);
    this.ID = props.ID ? props.ID : 0;
    this.Make = props.Make ? props.Make : '';
    this.Model = props.Model ? props.Model : '';
    this.Version = props.Version ? props.Version : '';
    this.Image = props.Image ? props.Image : '';
    this.KM = props.KM ? props.KM : 0;
    this.Price = props.Price ? props.Price : 0;
    this.YearModel = props.YearModel ? props.YearModel : 0;
    this.YearFab = props.YearFab ? props.YearFab : 0;
    this.Color = props.Color ? props.Color : '';
  }
}
