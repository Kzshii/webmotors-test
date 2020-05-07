export class Make {
  ID: number;
  Name: string;

  constructor(props: any = {}) {
    Object.assign(this, props);
    this.ID = props.ID ? props.ID : 0;
    this.Name = props.Name ? props.Name : '';
  }
}
